import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import BlenderAnimations from "./BlenderAnimation";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page (main portfolio) */}
        <Route path="/" element={<Portfolio />} />

        {/* Blender Animations page */}
        <Route path="/animations" element={<BlenderAnimations />} />
      </Routes>
    </Router>
  );
}
