import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

import "./blenderAnimations.css";

export default function BlenderAnimations() {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      src: "https://res.cloudinary.com/dhzbjktti/video/upload/v1763214797/Dodge_animation_zzkzys.mp4",
      title: "Dodge Animation",
    },
    {
      src: "https://res.cloudinary.com/dhzbjktti/video/upload/v1763214814/Trailer2_uat2ut.mp4",
      title: "Semaphore Teaser",
    },
  ];

  return (
    <section className="animations-page">
      <div className="back-btn-container">
        <Link to="/" className="back-btn">← Back</Link>
      </div>

      <h1 className="page-title">Blender Animations</h1>
      <p className="page-subtitle">A glimpse of my 3D world — crafted with motion and imagination.</p>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-card"
            onClick={() => setActiveVideo(video.src)}
          >
            <video
              src={video.src}
              loop
              muted
              playsInline
              className="thumbnail-video"
            />
            <p>{video.title}</p>
          </div>
        ))}
      </div>

      {activeVideo && (
        <div className="video-overlay" onClick={() => setActiveVideo(null)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <VideoPlayer src={activeVideo} />
            <button
              className="close-btn"
              onClick={() => setActiveVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
