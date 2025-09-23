import { useContext, useEffect, useRef, useState } from "react";
import "../css/video.css";
import video from "../video/video.mp4";
import { AppContext } from "../context/AppContext";

const Video = () => {
  const { contentsRef } = useContext(AppContext);
  const videoRef = useRef(null);
  const animatedContainerRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [progressDisplay, setProgressDisplay] = useState(0); // only for UI

  const progress = useRef(0); // actual progress value
  const progressTarget = useRef(0); // target progress from scroll

  // Load video duration
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);
    };

    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Scroll updates the target progress
  useEffect(() => {
    const handleScroll = (e) => {
      if (!duration) return;

      const delta = e.deltaY > 0 ? 0.25 : -0.25; // step per scroll
      progressTarget.current = Math.min(
        100,
        Math.max(0, progressTarget.current + delta)
      );
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [duration]);

  // Smooth animation toward target
  useEffect(() => {
    const videoElement = videoRef.current;
    let animationFrame;

    const animate = () => {
      if (!videoElement || !duration) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const diff = progressTarget.current - progress.current;
      const step = diff * 1; // smoothing speed

      if (Math.abs(diff) > 0.0000000000001) {
        progress.current = progress.current + step;
        setProgressDisplay(progress.current); // update UI text

        videoElement.currentTime = (progress.current / 100) * duration;

        // ✅ toggle "hide"
        if (animatedContainerRef.current) {
          if (progress.current >= 99.9) {
            animatedContainerRef.current.classList.add("hide");
            contentsRef.current.classList.remove("hide");
            document.body.style.overflow = "auto";
          } else {
            animatedContainerRef.current.classList.remove("hide");
            contentsRef.current.classList.add("hide");
            document.body.style.overflow = "hidden";
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  return (
    <div className="animated-container" ref={animatedContainerRef}>
      <video ref={videoRef} muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
