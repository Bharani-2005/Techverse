import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.icon}>
          ✅
        </h1>

        <h1>
          Order Placed Successfully!
        </h1>

        <p style={styles.text}>
          Thank you for shopping with us.
        </p>

        <Link
          to="/"
          style={styles.button}
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    background: "#f5f5f5",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow:
      "0px 4px 12px rgba(0,0,0,0.1)",
  },

  icon: {
    fontSize: "70px",
  },

  text: {
    color: "gray",
    marginBottom: "25px",
  },

  button: {
    textDecoration: "none",
    background: "green",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
  },
};

export default OrderSuccess;