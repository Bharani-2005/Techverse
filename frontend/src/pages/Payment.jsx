import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();

  const [cardNumber, setCardNumber] =
    useState("");

  const [name, setName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const handlePayment = (e) => {

    e.preventDefault();

    alert("Payment Successful ✅");

    navigate("/success");
  };

  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
          Secure Payment 💳
        </h1>

        <form onSubmit={handlePayment}>

          {/* CARD NUMBER */}
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value)
            }
            style={styles.input}
            required
          />

          {/* CARD HOLDER */}
          <input
            type="text"
            placeholder="Card Holder Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            style={styles.input}
            required
          />

          {/* ROW */}
          <div style={styles.row}>

            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) =>
                setExpiry(e.target.value)
              }
              style={styles.smallInput}
              required
            />

            <input
              type="password"
              placeholder="CVV"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value)
              }
              style={styles.smallInput}
              required
            />

          </div>

          {/* PAY BUTTON */}
          <button
            type="submit"
            style={styles.button}
          >
            Pay Now
          </button>

        </form>

      </div>

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg,#111827,#1e293b)",
    padding: "20px",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "450px",
    boxShadow:
      "0px 10px 30px rgba(0,0,0,0.3)",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#111827",
  },

  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
  },

  row: {
    display: "flex",
    gap: "15px",
  },

  smallInput: {
    flex: 1,
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "14px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    fontWeight: "bold",
  },

};

export default Payment;