import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./style.css";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiFlutter, SiMongodb, SiFirebase, SiCanva, SiBlender } from "react-icons/si";





// 3D Model Component
function HeroModel() {
  const { scene } = useGLTF("/dron.glb"); // Replace with your Blender .glb export
  return <primitive object={scene} scale={1.5} />;
}

export default function Portfolio() {
  // Multiple images for each project
  const projectImages = {
    spritebasket: ["/images/Sb3.png", "/images/Sb8.png", "/images/Sb9.png", "/images/Sb10.png"],
    speakhive: ["/images/sh1.jpeg", "/images/sh2.jpeg","/images/sh3.jpeg","/images/sh4.jpeg","/images/sh5.jpeg"],
    notesapp: [ "/images/Na3.png","/images/Na4.png","/images/Na5.png"],
    clashOfChampions:["/images/CocP2.jpeg","/images/CocP3.jpeg","/images/CocP1.jpeg","/images/Coc5.png","/images/CocP1.jpeg"],
    
  };

  // Track current index for each project
  const [slideIndex, setSlideIndex] = useState({
    spritebasket: 0,
    speakhive: 2,
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
        <br></br>
         <h3>Tech & Tools I Use</h3>
  <div className="tools-grid">
  <div><FaReact size={40} color="#61DBFB" /><p>React</p></div>
  <div><FaNodeJs size={40} color="#68A063" /><p>Node.js</p></div>
  <div><SiFlutter size={40} color="#02569B" /><p>Flutter</p></div>
  <div><SiMongodb size={40} color="#4DB33D" /><p>MongoDB</p></div>
  <div><SiFirebase size={40} color="#FFCA28" /><p>Firebase</p></div>
  <div><FaPython size={40} color="#3776AB" /><p>Python</p></div>
  <div><SiCanva size={40} color="#00C4CC" /><p>Canva</p></div>
  <div><SiBlender size={40} color="#F5792A" /><p>Blender</p></div>
</div>
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
            <br></br>
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
          <br></br>
          <h3>NotesApp</h3>
          <p>A note-taking app to manage tasks and reminders efficiently. Built with React Native and Firebase backend.</p>
          <a href="https://github.com/shujan2003/NotesApp" target="_blank">View Project</a>
        </div>

        {/* mySpeakHive Project */}
<div className="project-card">
  <div className="project-slider">
    <button
        className="prev-btn"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide("speakhive");
        }}
      >
        ⬅
      </button>
    <div className="image-container">
      <img
        src={projectImages.speakhive[slideIndex.speakhive]}
        alt="mySpeakHive Screenshot"
        className="project-img"
      />
    </div>
    <div className="slider-buttons">
      
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
  <br></br>
  <h3>mySpeakHive</h3>
  <p>
    A  chat application where users can communicate in real time.
    Built using Flutter and Firebase for authentication and messaging.
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
  <br></br>
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
      <section className="section contact-section">
  <h2> Let’s Connect</h2>
  <p className="contact-subtext">
   “Let’s shape ideas into interactive, impactful experiences.”
  </p>
  
  <div className="contact-cards">
    <a href="https://github.com/shujan2003" target="_blank" rel="noopener noreferrer" className="contact-card github">
      <FaGithub size={40} />
      <p>GitHub</p>
    </a>

    <a href="https://www.linkedin.com/in/shujandv/" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
      <FaLinkedin size={40} />
      <p>LinkedIn</p>
    </a>

    <a href="mailto:shujan@example.com" className="contact-card email">
      <FaEnvelope size={40} />
      <p>Email</p>
    </a>
  </div>
</section>

    </div>
  );
}
