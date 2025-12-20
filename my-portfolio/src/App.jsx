// src/App.jsx — routing with fallback
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import BlenderAnimations from "./BlenderAnimation";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* route for animations page (match your Navbar if you use /animations) */}
        <Route path="/animations" element={<BlenderAnimations />} />
        {/* keep the old one too if you expect that URL */}
        <Route path="/animations-projects" element={<BlenderAnimations />} />
        {/* fallback: render Portfolio for any unknown path */}
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}
