import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar container">
      <div className="navbar-container">
        {/* LEFT: Logo */}
        <NavLink to="/" className="logo">
          🌍 World<span>Atlas</span>
        </NavLink>

        {/* Hamburger (Mobile) */}
        <button
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* CENTER: Nav Links */}
        <nav className={`nav-links ${open ? "show" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/country" onClick={() => setOpen(false)}>
            Country
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
