import React, { forwardRef, useEffect, useState } from "react";
import "./Video.css";

const Video = forwardRef(({ onVideoClick }, ref) => {
  const [videoSrc, setVideoSrc] = useState(null);

  const elegirVideo = () => {
    const isLandscape = window.innerWidth > window.innerHeight;
    let src = null;

    try {
      if (isLandscape) {
        src = require("../assets/videoh.mp4");
      } else {
        src = require("../assets/video.mp4");
      }
    } catch (err) {
      console.warn("No se encontró el video correspondiente.");
    }

    setVideoSrc(src);
  };

  useEffect(() => {
    elegirVideo();
    window.addEventListener("resize", elegirVideo);
    return () => window.removeEventListener("resize", elegirVideo);
  }, []);

  return (
    <div className="video-container" onClick={onVideoClick}>
      {videoSrc && (
        <video
          ref={ref}
          src={videoSrc}
          className="video-element"
          autoPlay
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
});

export default Video;
