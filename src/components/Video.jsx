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
  const isTouching = useRef(false);
  const accumulatedDelta = useRef(0);

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
      videoElement.volume = 1.0;
      setAudioEnabled(true);
    } else {
      setAudioEnabled(false);
    }
  };

  // Desktop: improved wheel/trackpad scroll
  useEffect(() => {
    if (videoFinished || !introDone) return;

    let wheelTimeout;
    let lastWheelTime = 0;

    const handleWheel = (e) => {
      if (!duration) return;

      e.preventDefault();

      const now = Date.now();
      const timeSinceLastWheel = now - lastWheelTime;
      lastWheelTime = now;

      isScrolling.current = true;
      clearTimeout(scrollTimeout.current);
      clearTimeout(wheelTimeout);

      // Improved trackpad detection
      const isLikelyTrackpad = Math.abs(e.deltaY) < 100 && timeSinceLastWheel < 50;

      // Enhanced sensitivity with smoother accumulation
      let sensitivity;
      if (isLikelyTrackpad) {
        // Trackpad: very smooth, small increments
        sensitivity = 0.015;
      } else {
        // Mouse wheel: larger steps
        sensitivity = 0.2;
      }

      const delta = e.deltaY * sensitivity;
      accumulatedDelta.current += delta;

      // Apply accumulated delta
      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );

      // Decay accumulated delta
      wheelTimeout = setTimeout(() => {
        accumulatedDelta.current *= 0.9;
      }, 10);

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        accumulatedDelta.current = 0;
      }, 200);
    };

    const container = animatedContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      clearTimeout(scrollTimeout.current);
      clearTimeout(wheelTimeout);
    };
  }, [duration, videoFinished, introDone]);

  // Mobile: completely revamped touch handling
  useEffect(() => {
    if (videoFinished || !introDone) return;

    const handleTouchStart = (e) => {
      isTouching.current = true;
      lastTouchY.current = e.touches[0].clientY;
      velocity.current = 0;
      lastMoveTime.current = Date.now();

      // Stop any momentum
      isScrolling.current = false;
      clearTimeout(scrollTimeout.current);
    };

    const handleTouchMove = (e) => {
      if (!duration || !isTouching.current) return;

      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY.current - currentY;
      const currentTime = Date.now();
      const timeDelta = Math.max(currentTime - lastMoveTime.current, 1);

      // Active scrolling
      isScrolling.current = true;

      // Calculate velocity
      velocity.current = deltaY / timeDelta;

      // More responsive touch sensitivity
      const sensitivity = 0.12;
      const delta = deltaY * sensitivity;

      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );

      lastTouchY.current = currentY;
      lastMoveTime.current = currentTime;
    };

    const handleTouchEnd = () => {
      isTouching.current = false;

      // Apply strong momentum
      if (Math.abs(velocity.current) > 0.15) {
        const momentum = velocity.current * 25;
        progressTarget.current = Math.min(
          100,
          Math.max(0, progressTarget.current + momentum)
        );
      }

      // Keep scrolling active for a bit longer for audio
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        velocity.current = 0;
      }, 300);
    };

    const container = animatedContainerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true });
      container.addEventListener("touchmove", handleTouchMove, { passive: false });
      container.addEventListener("touchend", handleTouchEnd, { passive: true });
      container.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
        container.removeEventListener("touchcancel", handleTouchEnd);
      }
      clearTimeout(scrollTimeout.current);
    };
  }, [duration, videoFinished, introDone]);

  // Smooth animation loop with improved audio handling
  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrame;
    let audioPlayPromise = null;

    const animate = (time) => {
      if (!videoElement || !duration) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (introDone && !videoFinished) {
        // Ultra-smooth progress interpolation
        const diff = progressTarget.current - progress.current;
        const easing = isScrolling.current ? 0.18 : 0.06;
        progress.current += diff * easing;
        setProgressDisplay(progress.current);

        const targetTime = (progress.current / 100) * duration;

        if (audioEnabled) {
          // Enhanced audio mode for mobile
          const timeDiff = targetTime - videoElement.currentTime;

          // Always update video position when difference is significant
          if (Math.abs(timeDiff) > 0.03) {
            videoElement.currentTime = targetTime;
          }

          // Play audio while actively scrolling OR during momentum
          if (isScrolling.current || Math.abs(diff) > 0.1) {
            if (videoElement.paused) {
              // Ensure proper playback rate
              videoElement.playbackRate = 1.0;

              // Handle play promise properly
              if (!audioPlayPromise) {
                audioPlayPromise = videoElement.play().catch((err) => {
                  console.log("Audio play prevented:", err);
                  audioPlayPromise = null;
                });

                if (audioPlayPromise) {
                  audioPlayPromise.then(() => {
                    audioPlayPromise = null;
                  }).catch(() => {
                    audioPlayPromise = null;
                  });
                }
              }
            }
          } else {
            // Only pause when completely stopped
            if (!videoElement.paused && Math.abs(diff) < 0.05) {
              videoElement.pause();
              audioPlayPromise = null;
            }
          }
        } else {
          // Silent mode: instant updates
          videoElement.currentTime = targetTime;
          if (!videoElement.paused) {
            videoElement.pause();
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
    return () => {
      cancelAnimationFrame(animationFrame);
      if (audioPlayPromise) {
        audioPlayPromise.then(() => {
          if (videoElement) videoElement.pause();
        }).catch(() => { });
      }
    };
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