import React from "react";
import { Link } from "react-router-dom";

function Home({ darkMode }) {

  return (

    <div
      style={{
        ...styles.container,

        background: darkMode
          ? "linear-gradient(135deg,#0f172a,#1e293b)"
          : "linear-gradient(135deg,#dbeafe,#ffffff)",

        color:
          darkMode
            ? "white"
            : "#111827",
      }}
    >

      {/* HERO SECTION */}
      <section
        style={{
          ...styles.hero,

          color:
            darkMode
              ? "white"
              : "#111827",
        }}
      >

        {/* LEFT CONTENT */}
        <div style={styles.left}>

          <p style={styles.tag}>
            🔥 #1 Trending Tech Store
          </p>

          <h1
            style={{
              ...styles.title,

              color:
                darkMode
                  ? "white"
                  : "#111827",
            }}
          >
            Upgrade Your
            Digital Lifestyle
          </h1>

          <p
            style={{
              ...styles.subtitle,

              color:
                darkMode
                  ? "#cbd5e1"
                  : "#374151",
            }}
          >
            Discover premium smartphones,
            laptops, gaming accessories,
            smart gadgets, cameras and
            much more at the best prices.
          </p>

          <div style={styles.buttons}>

            <Link
              to="/products"
              style={{
                ...styles.shopBtn,

                background:
                  darkMode
                    ? "#2563eb"
                    : "#111827",
              }}
            >
              Shop Now
            </Link>

            <Link
              to="/wishlist"
              style={{
                ...styles.wishlistBtn,

                background:
                  darkMode
                    ? "white"
                    : "#111827",

                color:
                  darkMode
                    ? "#111827"
                    : "white",
              }}
            >
              Wishlist
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.right}>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop"
            alt="Tech Products"
            style={styles.image}
          />

        </div>

      </section>

      {/* FEATURES */}
      <section style={styles.features}>

        <div
          style={{
            ...styles.card,

            background:
              darkMode
                ? "rgba(255,255,255,0.08)"
                : "white",

            color:
              darkMode
                ? "white"
                : "#111827",
          }}
        >

          <h2>🚚</h2>

          <h3>Free Shipping</h3>

          <p>
            Fast delivery across India.
          </p>

        </div>

        <div
          style={{
            ...styles.card,

            background:
              darkMode
                ? "rgba(255,255,255,0.08)"
                : "white",

            color:
              darkMode
                ? "white"
                : "#111827",
          }}
        >

          <h2>💳</h2>

          <h3>Secure Payments</h3>

          <p>
            100% safe payment gateway.
          </p>

        </div>

        <div
          style={{
            ...styles.card,

            background:
              darkMode
                ? "rgba(255,255,255,0.08)"
                : "white",

            color:
              darkMode
                ? "white"
                : "#111827",
          }}
        >

          <h2>⭐</h2>

          <h3>Top Rated Products</h3>

          <p>
            Premium quality electronics.
          </p>

        </div>

      </section>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  container: {
    minHeight: "100vh",
    padding: "50px",
    transition: "0.3s",
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "40px",
    minHeight: "80vh",
  },

  left: {
    flex: 1,
    minWidth: "320px",
  },

  right: {
    flex: 1,
    textAlign: "center",
    minWidth: "320px",
  },

  tag: {
    background: "#2563eb",
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "30px",
    marginBottom: "20px",
    fontSize: "14px",
    color: "white",
  },

  title: {
    fontSize: "64px",
    lineHeight: "1.2",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "20px",
    lineHeight: "1.8",
    marginBottom: "35px",
    maxWidth: "650px",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  shopBtn: {
    textDecoration: "none",
    color: "white",
    padding: "15px 30px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  },

  wishlistBtn: {
    textDecoration: "none",
    padding: "15px 30px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    maxWidth: "550px",
    borderRadius: "25px",
    boxShadow:
      "0px 10px 30px rgba(0,0,0,0.4)",
  },

  features: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    marginTop: "60px",
  },

  card: {
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    boxShadow:
      "0px 6px 20px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },

};

export default Home;