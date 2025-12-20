// inside Navbar.jsx (relevant parts)
import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    // Make sure these match the id attributes in Portfolio.jsx exactly (case-sensitive)
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
  useEffect(() => setOpen(false), [location]);

  const navLinks = [
    { id: "home", label: "Home", href: "#home", internal: true },
    { id: "about", label: "About", href: "#about", internal: true },
    { id: "projects", label: "Projects", href: "#projects", internal: true },
    { id: "contact", label: "Contact", href: "#contact", internal: true },
  ];

  return (
    <header className={`site-header ${open ? "open" : ""}`}>
      <div className="header-inner">
        {/* brand/logo */}
        <div className="brand" aria-hidden="true">
          <RouterLink to="/" className="brand-link" aria-label="home">
            {/* optional logo */}
            {/* <img src="/images/logo-small.png" alt="logo" style={{ height: 36 }} /> */}
          </RouterLink>
        </div>

        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
  href={link.href}
  className={active === link.id ? "active" : ""}
  onClick={(e) => {
    setActive(link.id);    // set active immediately
    setOpen(false);        // close mobile menu
    // optionally: smooth scroll to section: e.preventDefault(); document.querySelector(link.href).scrollIntoView({behavior: 'smooth'});
  }}
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
