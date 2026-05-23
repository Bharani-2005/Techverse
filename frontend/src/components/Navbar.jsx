import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  cartItems = [],
  wishlistItems = [],
  darkMode,
  setDarkMode,
}) {

  return (

    <nav style={styles.navbar}>

      {/* LEFT LOGO */}
      <div style={styles.logoContainer}>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          alt="logo"
          style={styles.logoImage}
        />

      </div>

      {/* CENTER SHOP NAME */}
      <h1 style={styles.logoText}>
        TechVerse
      </h1>

      {/* RIGHT LINKS */}
      <div style={styles.links}>

        <Link
          to="/"
          style={styles.link}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={styles.link}
        >
          Products
        </Link>

        <Link
          to="/wishlist"
          style={styles.link}
        >
          ❤️ Wishlist (
          {wishlistItems.length}
          )
        </Link>

        <Link
          to="/cart"
          style={styles.link}
        >
          🛒 Cart (
          {cartItems.length}
          )
        </Link>

        <Link
          to="/login"
          style={styles.link}
        >
          Login
        </Link>

        {/* DARK MODE BUTTON */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          style={styles.darkBtn}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}

const styles = {

  navbar: {
    background: "#111827",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow:
      "0px 4px 12px rgba(0,0,0,0.2)",
  },

  // LEFT LOGO
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoImage: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  // CENTER NAME
  logoText: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "34px",
    fontWeight: "bold",
    background:
      "linear-gradient(90deg,#3b82f6,#8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "2px",
    fontFamily: "Arial",
  },

  // LINKS
  links: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500",
    transition: "0.3s",
  },

  // DARK MODE BUTTON
  darkBtn: {
    border: "none",
    background: "white",
    borderRadius: "50%",
    width: "42px",
    height: "42px",
    cursor: "pointer",
    fontSize: "18px",
    boxShadow:
      "0px 4px 10px rgba(0,0,0,0.2)",
  },

};

export default Navbar;