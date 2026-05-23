import React, { useState } from "react";

function Login({ darkMode }) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    alert("Login Successful ✅");
  };

  return (

    <div
      style={{
        ...styles.container,

        background:
          darkMode
            ? "#111827"
            : "#e5e7eb",
      }}
    >

      <div
        style={{
          ...styles.card,

          background:
            darkMode
              ? "#1f2937"
              : "white",

          color:
            darkMode
              ? "white"
              : "#111827",
        }}
      >

        <h1 style={styles.title}>
          Welcome Back 👋
        </h1>

        <p
          style={{
            ...styles.subtitle,

            color:
              darkMode
                ? "#d1d5db"
                : "gray",
          }}
        >
          Login to continue shopping
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              ...styles.input,

              background:
                darkMode
                  ? "#374151"
                  : "white",

              color:
                darkMode
                  ? "white"
                  : "black",

              border:
                darkMode
                  ? "1px solid #4b5563"
                  : "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              ...styles.input,

              background:
                darkMode
                  ? "#374151"
                  : "white",

              color:
                darkMode
                  ? "white"
                  : "black",

              border:
                darkMode
                  ? "1px solid #4b5563"
                  : "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={styles.button}
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
  },

  card: {
    padding: "40px",
    borderRadius: "16px",
    width: "350px",
    boxShadow:
      "0px 6px 20px rgba(0,0,0,0.2)",
    transition: "0.3s",
  },

  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "32px",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "15px",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "18px",
    borderRadius: "10px",
    boxSizing: "border-box",
    outline: "none",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

};

export default Login;