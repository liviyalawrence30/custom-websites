import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLaptopCode, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import "../../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <FaLaptopCode className="logo-icon" />
          <span>Custom Websites</span>
        </Link>

        <div className="nav-controls">
          
           

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/templates" onClick={closeMenu}>
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" onClick={closeMenu}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={closeMenu}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/reviews" onClick={closeMenu}>
                Reviews
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;