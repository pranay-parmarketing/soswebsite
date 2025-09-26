import { useContext, useEffect, useRef, useState } from "react";
import "../css/video.css";
import video from "../video/video.mp4";
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

  const progress = useRef(0);
  const progressTarget = useRef(0);
  const lastTouchY = useRef(0);
  const lastUpdateTime = useRef(0);

  const [videoFinished, setVideoFinished] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  // Load video duration + autoplay intro
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);

      // ✅ autoplay first 2s
      videoElement.muted = true;
      videoElement.play();

      setTimeout(() => {
        videoElement.pause();
        videoElement.muted = false;
        const introProgress =
          (videoElement.currentTime / videoElement.duration) * 100;

        // Sync scrubbing state with current time
        progress.current = introProgress;
        progressTarget.current = introProgress;
        setProgressDisplay(introProgress);

        setIntroDone(true); // now allow scrubbing
      }, 900);
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Desktop: scroll updates target progress
  useEffect(() => {
    if (videoFinished || !introDone) return;

    const handleWheel = (e) => {
      if (!duration) return;
      const delta = e.deltaY > 0 ? 0.12 : -0.12;
      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [duration, videoFinished, introDone]);

  // Mobile: touch updates target progress
  useEffect(() => {
    if (videoFinished || !introDone) return;

    const handleTouchStart = (e) => {
      lastTouchY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!duration) return;
      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY.current - currentY;
      const delta = deltaY * 0.05;
      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );
      lastTouchY.current = currentY;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [duration, videoFinished, introDone]);

  // Smooth animation loop for scrubbing
  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrame;

    const animate = (time) => {
      if (!videoElement || !duration) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      if (introDone && !videoFinished) {
        const diff = progressTarget.current - progress.current;
        progress.current += diff * 0.03;
        setProgressDisplay(progress.current);

        if (time - lastUpdateTime.current > 60) {
          videoElement.currentTime = (progress.current / 100) * duration;
          lastUpdateTime.current = time;
        }

        if (progress.current >= 99.9) {
          setVideoFinished(true);
          animatedContainerRef.current.style.height = 0;
          window.scrollTo(0, 0);

          progress.current = 100;
          progressTarget.current = 100;
          videoElement.currentTime = duration;

          if (animatedContainerRef.current && contentsRef.current) {
            window.scrollTo(0, 0);
            animatedContainerRef.current.classList.remove("hide");
            contentsRef.current.classList.remove("hide");
            document.body.style.overflow = "auto";
            refreshButtonRef.current.classList.remove("d-none");
          }
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
  }, [duration, videoFinished, introDone]);

  //
  const swipeUpLottie = {
    loop: true,
    autoplay: true,
    animationData: swipeUp,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="animated-container" ref={animatedContainerRef}>
      <video ref={videoRef} playsInline preload="auto">
        <source
          src="https://singledebt.in/wp-content/uploads/2025/09/sosvid-sd.mp4"
          type="video/mp4"
        />
      </video>

      <div className="swipe-up-lottie" ref={lottieRef}>
        <Lottie options={swipeUpLottie} />
      </div>
    </div>
  );
};

export default Video;
