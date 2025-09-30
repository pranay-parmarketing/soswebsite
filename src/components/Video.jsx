// import { useContext, useEffect, useRef, useState } from "react";
// import "../css/video.css";
// import { AppContext } from "../context/AppContext";
// import swipeUp from "../lottie/swipe-up.json";
// import Lottie from "react-lottie";

// const Video = () => {
//   const { contentsRef, refreshButtonRef } = useContext(AppContext);
//   const videoRef = useRef(null);
//   const animatedContainerRef = useRef(null);
//   const lottieRef = useRef(null);

//   const [duration, setDuration] = useState(0);
//   const [progressDisplay, setProgressDisplay] = useState(0);
//   const [videoFinished, setVideoFinished] = useState(false);
//   const [introDone, setIntroDone] = useState(false);
//   const [audioEnabled, setAudioEnabled] = useState(false);

//   const progress = useRef(0);
//   const progressTarget = useRef(0);
//   const lastTouchY = useRef(0);
//   const lastUpdateTime = useRef(0);

//   // 🔑 Helper: Finish video
//   const finishVideo = () => {
//     const videoElement = videoRef.current;

//     setVideoFinished(true);
//     if (animatedContainerRef.current) {
//       animatedContainerRef.current.style.height = 0;
//     }
//     window.scrollTo(0, 0);

//     progress.current = 100;
//     progressTarget.current = 100;

//     if (videoElement && duration) {
//       videoElement.currentTime = duration;
//     }

//     if (animatedContainerRef.current && contentsRef.current) {
//       animatedContainerRef.current.classList.remove("hide");
//       contentsRef.current.classList.remove("hide");
//       document.body.style.overflow = "auto";
//     }

//     if (refreshButtonRef.current) {
//       refreshButtonRef.current.classList.remove("d-none");
//     }
//   };

//   // Load video duration + autoplay intro
//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (!videoElement) return;

//     const handleLoadedMetadata = () => {
//       setDuration(videoElement.duration);

//       // autoplay intro muted
//       videoElement.muted = true;
//       videoElement.play();

//       setTimeout(() => {
//         videoElement.pause();
//         const introProgress =
//           (videoElement.currentTime / videoElement.duration) * 100;

//         progress.current = introProgress;
//         progressTarget.current = introProgress;
//         setProgressDisplay(introProgress);

//         setIntroDone(true); // allow scrubbing
//       }, 900);
//     };

//     videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
//     return () => {
//       videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
//     };
//   }, []);

//   // Desktop: wheel scroll
//   useEffect(() => {
//     if (videoFinished || !introDone) return;

//     const handleWheel = (e) => {
//       if (!duration) return;
//       const delta = e.deltaY > 0 ? 0.13 : -0.13;
//       progressTarget.current = Math.min(
//         100,
//         Math.max(0, progressTarget.current + delta)
//       );
//     };

//     window.addEventListener("wheel", handleWheel, { passive: true });
//     return () => window.removeEventListener("wheel", handleWheel);
//   }, [duration, videoFinished, introDone]);

//   // Mobile: touch scroll
//   useEffect(() => {
//     if (videoFinished || !introDone) return;

//     const handleTouchStart = (e) => {
//       lastTouchY.current = e.touches[0].clientY;
//     };

//     const handleTouchMove = (e) => {
//       if (!duration) return;
//       const currentY = e.touches[0].clientY;
//       const deltaY = lastTouchY.current - currentY;
//       const delta = deltaY * 0.05;
//       progressTarget.current = Math.min(
//         100,
//         Math.max(0, progressTarget.current + delta)
//       );
//       lastTouchY.current = currentY;
//     };

//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     window.addEventListener("touchmove", handleTouchMove, { passive: true });

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [duration, videoFinished, introDone]);

//   // Smooth animation loop
//   useEffect(() => {
//     const videoElement = videoRef.current;
//     let animationFrame;

//     const animate = (time) => {
//       if (!videoElement || !duration) {
//         animationFrame = requestAnimationFrame(animate);
//         return;
//       }

//       if (introDone && !videoFinished) {
//         const diff = progressTarget.current - progress.current;
//         progress.current += diff * 0.03;
//         setProgressDisplay(progress.current);

//         if (time - lastUpdateTime.current > 60) {
//           videoElement.currentTime = (progress.current / 100) * duration;
//           lastUpdateTime.current = time;

//           // ✅ If audio is enabled, keep video playing with sound
//           if (audioEnabled && videoElement.paused) {
//             videoElement.play().catch(() => {});
//           }
//         }

//         if (progress.current >= 99.9) {
//           finishVideo();
//           return;
//         }

//         if (animatedContainerRef.current && contentsRef.current) {
//           animatedContainerRef.current.classList.remove("hide");
//           contentsRef.current.classList.add("hide");
//           document.body.style.overflow = "hidden";
//         }
//       }

//       animationFrame = requestAnimationFrame(animate);
//     };

//     animationFrame = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrame);
//   }, [duration, videoFinished, introDone, audioEnabled]);

//   // Enable audio on button click
//   const enableAudio = () => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.muted = false;
//       videoElement.play().catch(() => {});
//       setAudioEnabled(true);
//     }
//   };

//   const swipeUpLottie = {
//     loop: true,
//     autoplay: true,
//     animationData: swipeUp,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div className="animated-container" ref={animatedContainerRef}>
//       <video ref={videoRef} playsInline preload="auto">
//         <source
//           src="https://singledebt.in/wp-content/uploads/2025/09/sosvid_4-1.mp4"
//           type="video/mp4"
//         />
//       </video>

//       {/* 🔊 Enable Audio Button */}
//       {/* {!audioEnabled && introDone && !videoFinished && (
//         <button className="button enable-audio" onClick={enableAudio}>
//           🔊 Enable Sound
//         </button>
//       )} */}

//       {/* ⏭ Skip Video Button */}
//       {introDone && !videoFinished && (
//         <button className="button skip-video" onClick={finishVideo}>
//           Skip video
//         </button>
//       )}

//       <div className="swipe-up-lottie" ref={lottieRef}>
//         <Lottie options={swipeUpLottie} />
//       </div>
//     </div>
//   );
// };

// export default Video;


import { useContext, useEffect, useRef, useState } from "react";
import "../css/video.css";
import { AppContext } from "../context/AppContext";
import swipeUp from "../lottie/swipe-up.json";
import Lottie from "react-lottie";

const Video = () => {
  const { contentsRef, refreshButtonRef } = useContext(AppContext);
  const videoRef = useRef(null);
  const animatedContainerRef = useRef(null);
  const lottieRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [progressDisplay, setProgressDisplay] = useState(0);
  const [videoFinished, setVideoFinished] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(false);

  const progress = useRef(0);
  const progressTarget = useRef(0);
  const lastTouchY = useRef(0);
  const lastUpdateTime = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);
  const velocity = useRef(0);
  const lastMoveTime = useRef(0);

  // 🔑 Helper: Finish video
  const finishVideo = () => {
    const videoElement = videoRef.current;

    setVideoFinished(true);
    if (animatedContainerRef.current) {
      animatedContainerRef.current.style.height = 0;
    }
    window.scrollTo(0, 0);

    progress.current = 100;
    progressTarget.current = 100;

    if (videoElement && duration) {
      videoElement.currentTime = duration;
      videoElement.pause();
    }

    if (animatedContainerRef.current && contentsRef.current) {
      animatedContainerRef.current.classList.remove("hide");
      contentsRef.current.classList.remove("hide");
      document.body.style.overflow = "auto";
    }

    if (refreshButtonRef.current) {
      refreshButtonRef.current.classList.remove("d-none");
    }
  };

  // Load video duration + autoplay intro
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);

      // autoplay intro muted
      videoElement.muted = true;
      videoElement.play();

      setTimeout(() => {
        videoElement.pause();
        const introProgress =
          (videoElement.currentTime / videoElement.duration) * 100;

        progress.current = introProgress;
        progressTarget.current = introProgress;
        setProgressDisplay(introProgress);

        setIntroDone(true);
        // Show sound prompt after intro
        setShowSoundPrompt(true);
      }, 900);
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Handle sound prompt response
  const handleSoundPrompt = (enableSound) => {
    const videoElement = videoRef.current;
    setShowSoundPrompt(false);

    if (enableSound && videoElement) {
      videoElement.muted = false;
      setAudioEnabled(true);
    } else {
      setAudioEnabled(false);
    }
  };

  // Desktop: wheel scroll (works for both mouse wheel and trackpad)
  useEffect(() => {
    if (videoFinished || !introDone) return;

    const handleWheel = (e) => {
      if (!duration) return;

      e.preventDefault();

      isScrolling.current = true;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);

      // Detect trackpad vs mouse wheel
      // Trackpad typically has smaller deltaY values and more frequent events
      const isTrackpad = Math.abs(e.deltaY) < 50;

      // Adjust sensitivity based on input type
      const sensitivity = isTrackpad ? 0.03 : 0.15;
      const delta = e.deltaY > 0 ? sensitivity : -sensitivity;

      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );
    };

    // Use non-passive listener to allow preventDefault
    const container = animatedContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout.current);
    };
  }, [duration, videoFinished, introDone]);

  // Mobile: improved touch scroll with momentum
  useEffect(() => {
    if (videoFinished || !introDone) return;

    const handleTouchStart = (e) => {
      lastTouchY.current = e.touches[0].clientY;
      velocity.current = 0;
      lastMoveTime.current = Date.now();
    };

    const handleTouchMove = (e) => {
      if (!duration) return;

      e.preventDefault(); // Prevent page scroll

      isScrolling.current = true;
      clearTimeout(scrollTimeout.current);

      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY.current - currentY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastMoveTime.current;

      // Calculate velocity for momentum
      if (timeDelta > 0) {
        velocity.current = deltaY / timeDelta;
      }

      // Improved sensitivity for mobile
      const sensitivity = 0.08;
      const delta = deltaY * sensitivity;

      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );

      lastTouchY.current = currentY;
      lastMoveTime.current = currentTime;

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        velocity.current = 0;
      }, 150);
    };

    const handleTouchEnd = () => {
      // Apply momentum after touch ends
      if (Math.abs(velocity.current) > 0.1) {
        const momentum = velocity.current * 20; // Amplify momentum
        progressTarget.current = Math.min(
          100,
          Math.max(0, progressTarget.current + momentum)
        );
      }

      setTimeout(() => {
        isScrolling.current = false;
        velocity.current = 0;
      }, 100);
    };

    const container = animatedContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
      clearTimeout(scrollTimeout.current);
    };
  }, [duration, videoFinished, introDone]);

  // Smooth animation loop
  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrame;

    const animate = (time) => {
      if (!videoElement || !duration) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (introDone && !videoFinished) {
        // Smooth progress interpolation with adaptive easing
        const diff = progressTarget.current - progress.current;
        const easing = isScrolling.current ? 0.15 : 0.08;
        progress.current += diff * easing;
        setProgressDisplay(progress.current);

        const targetTime = (progress.current / 100) * duration;

        if (audioEnabled) {
          // Audio mode: smoother updates
          if (time - lastUpdateTime.current > 32) {
            const timeDiff = targetTime - videoElement.currentTime;

            if (Math.abs(timeDiff) > 0.05) {
              videoElement.currentTime = targetTime;
            }

            // Play audio only when scrolling
            if (isScrolling.current) {
              if (videoElement.paused) {
                videoElement.playbackRate = 1.0;
                videoElement.play().catch(() => { });
              }
            } else {
              if (!videoElement.paused) {
                videoElement.pause();
              }
            }

            lastUpdateTime.current = time;
          }
        } else {
          // Silent mode: more responsive
          if (time - lastUpdateTime.current > 16) {
            videoElement.currentTime = targetTime;
            lastUpdateTime.current = time;

            if (!videoElement.paused) {
              videoElement.pause();
            }
          }
        }

        if (progress.current >= 99.9) {
          finishVideo();
          return;
        }

        if (animatedContainerRef.current && contentsRef.current) {
          animatedContainerRef.current.classList.remove("hide");
          contentsRef.current.classList.add("hide");
          document.body.style.overflow = "hidden";
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, videoFinished, introDone, audioEnabled]);

  const swipeUpLottie = {
    loop: true,
    autoplay: true,
    animationData: swipeUp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const isMobile = window.innerWidth < 768;

  return (
    <div className="animated-container" ref={animatedContainerRef}>
      <video ref={videoRef} playsInline preload="auto">
        <source
          src={
            isMobile
              ? "https://singledebt.in/wp-content/uploads/2025/09/2648924321956055887mainsos_mobilever.mp4"
              : "https://singledebt.in/wp-content/uploads/2025/09/2190237412106096179sosvid_4_wo_music_.mp4"
          }
          type="video/mp4"
        />
      </video>

      {/* Sound Prompt Modal */}
      {showSoundPrompt && (
        <div className="sound-prompt-overlay">
          <div className="sound-prompt-modal">
            <h3>🔊 Enable Sound?</h3>
            <p>Would you like to play this video with sound?</p>
            <div className="sound-prompt-buttons">
              <button
                className="button sound-yes"
                onClick={() => handleSoundPrompt(true)}
              >
                Yes, Enable Sound
              </button>
              <button
                className="button sound-no"
                onClick={() => handleSoundPrompt(false)}
              >
                No, Keep Muted
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ⏭ Skip Video Button */}
      {introDone && !videoFinished && (
        <button className="button skip-video" onClick={finishVideo}>
          Skip video
        </button>
      )}

      <div className="swipe-up-lottie" ref={lottieRef}>
        <Lottie options={swipeUpLottie} />
      </div>
    </div>
  );
};

export default Video;