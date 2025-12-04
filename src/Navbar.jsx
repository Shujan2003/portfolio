import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  // Scroll-spy (works with section ids: home, about, projects, contact)
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const handler = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sections[i]);
          break;
        }
      }
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-header ${open ? "open" : ""}`}>
      <div className="header-inner">
        {/* BRAND: removed text name. If you want a logo, replace src with /images/logo-small.png */}
        <div className="brand" aria-hidden="true">
          <a className="brand-link" href="#home" aria-label="home" onClick={() => setOpen(false)}>
            {/* intentionally blank to remove the name */}
            <img src="/images/logo-small.png" alt="logo" style={{ height: 0, width: 0, display: "none" }} onError={(e)=>e.target.style.display='none'} />
          </a>
        </div>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={active === link.id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`burger ${open ? "open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
