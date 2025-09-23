import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./style.css";


// 3D Model Component
function HeroModel() {
  const { scene } = useGLTF("/dron.glb"); // Replace with your Blender .glb export
  return <primitive object={scene} scale={1.5} />;
}

export default function Portfolio() {
  // Multiple images for each project
  const projectImages = {
    spritebasket: ["/images/Sb3.png", "/images/Sb8.png", "/images/Sb9.png", "/images/Sb10.png"],
    speakhive: ["/images/speak1.png", "/images/speak2.png"],
    notesapp: [ "/images/Na3.png","/images/Na4.png","/images/Na5.png"],
    clashOfChampions:["/images/CocP2.jpeg","/images/CocP3.jpeg","/images/CocP1.jpeg","/images/Coc5.png","/images/CocP1.jpeg"],
    speakhive:[""]
  };

  // Track current index for each project
  const [slideIndex, setSlideIndex] = useState({
    spritebasket: 0,
    speakhive: 0,
    notesapp: 2,
    clashOfChampions:0,

  });

  const nextSlide = (project) => {
    setSlideIndex((prev) => ({
      ...prev,
      [project]: (prev[project] + 1) % projectImages[project].length
    }));
  };

  const prevSlide = (project) => {
    setSlideIndex((prev) => ({
      ...prev,
      [project]:
        (prev[project] - 1 + projectImages[project].length) %
        projectImages[project].length
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <HeroModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I’m Shujan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Full Stack Developer & 3D Animator
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          I am an MCA student passionate about full stack development, game development,
          and 3D animations. I enjoy blending creativity and coding to build impactful
          digital experiences.
        </p>
      </section>

      {/* Full Stack Projects Section */}
      <section className="section section-dark">
        <h2>Full Stack Projects</h2>
        <div className="project-grid">
          {/* SpriteBasket */}
          <div className="project-card">
            <div className="project-slider">
              <button className="prev-btn" onClick={() => prevSlide("spritebasket")}>⬅</button>
             
              <img
                src={projectImages.spritebasket[slideIndex.spritebasket]}
                 alt="SpriteBasket Screenshot"
                  className="project-img"
              />
    
              <button className="next-btn" onClick={() => nextSlide("spritebasket")}>➡</button>
            </div>
            <h3>SpriteBasket</h3>
            <p>
              A platform where users can upload and download 2D game assets like sprites,
              tiles, and UI elements. Built using React, Node.js, and MongoDB.
            </p>
            <a href="https://github.com/shujan2003/SpriteBasket" target="_blank">View Project</a>
          </div>

         
          {/* NotesApp */}
        <div className="project-card">
          <div className="project-slider">
            <button className="prev-btn" onClick={() => prevSlide("notesapp")}>⬅</button>
            <img
              src={projectImages.notesapp[slideIndex.notesapp]}
              alt="NotesApp Screenshot"
              className="project-img"
            />
            <button className="next-btn" onClick={() => nextSlide("notesapp")}>➡</button>
          </div>
          <h3>NotesApp</h3>
          <p>A note-taking app to manage tasks and reminders efficiently. Built with React Native and Firebase backend.</p>
          <a href="https://github.com/shujan2003/NotesApp" target="_blank">View Project</a>
        </div>

        {/* mySpeakHive Project */}
<div className="project-card">
  <div className="project-slider">
    <div className="image-container">
      <img
        src={projectImages.speakhive[slideIndex.speakhive]}
        alt="mySpeakHive Screenshot"
        className="project-img"
      />
    </div>
    <div className="slider-buttons">
      <button
        className="prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide("speakhive");
        }}
      >
        ⬅
      </button>
      <button
        className="next-btn"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide("speakhive");
        }}
      >
        ➡
      </button>
    </div>
  </div>
  <h3>mySpeakHive</h3>
  <p>
    A voice-based chat application where users can communicate in real time.
    Built using React Native and Firebase for authentication and messaging.
  </p>
  <a
    href="https://github.com/shujan2003/mySpeakHive"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Project
  </a>
</div>


           {/* Clash Of Champions */}
<div className="project-card">
  <div className="project-slider">
    <button className="prev-btn" onClick={() => prevSlide("clashOfChampions")}>⬅</button>
    <img
      src={projectImages.clashOfChampions[slideIndex.clashOfChampions]}
      alt="Clash of Champions Screenshot"
      className="project-img"
    />
    <button className="next-btn" onClick={() => nextSlide("clashOfChampions")}>➡</button>
  </div>
  <h3>Clash Of Champions</h3>
  <p>
    A 2D fighting game built with Python and Pygame where players compete in rounds to win the match.
  </p>
  <a href="https://github.com/shujan2003/clashOfChapions" target="_blank" rel="noopener noreferrer">View Project</a>
</div>

        

        </div>
      </section>

      {/* Animations Section */}
      <section className="section">
        <h2>Blender Animations</h2>
        <div className="video-grid">
          {/* Add your animation videos here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section section-dark">
        <h2>Get In Touch</h2>
        <p>Email: <a href="mailto:shujan@example.com">shujan@example.com</a></p>
        <div className="contact-links">
          <a href="https://github.com/shujan2003" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} style={{ marginRight: "8px" }} /> GitHub
          </a>
          <a href="https://linkedin.com/in/shujan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ marginRight: "8px" }} /> LinkedIn
          </a>
          <a href="mailto:shujan@example.com">
            <FaEnvelope size={24} style={{ marginRight: "8px" }} /> Email
          </a>
        </div>
      </section>
    </div>
  );
}
