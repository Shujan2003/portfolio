import React, { useRef, useState } from "react";
import "./blenderAnimations.css";

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const handleProgress = () => {
    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(percent);
  };

  const handleSeek = (e) => {
    const value = e.target.value;
    videoRef.current.currentTime =
      (value / 100) * videoRef.current.duration;
    setProgress(value);
  };

  return (
    <div className="custom-player">
      <video
  ref={videoRef}
  src={src}
  autoPlay
  controls
  onTimeUpdate={handleProgress}
  className="player-video"
/>

      <div className="controls">
        <button onClick={togglePlay} className="control-btn">
          {playing ? "⏸" : "▶"}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="progress-bar"
        />
      </div>
    </div>
  );
}
