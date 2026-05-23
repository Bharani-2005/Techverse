import React from "react";
import { Link } from "react-router-dom";

function Cart({
  cartItems,
  increaseQty,
  decreaseQty,
  removeFromCart,
  darkMode,
}) {

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.qty,
    0
  );

  return (

    <div
      style={{
        ...styles.container,

        background:
          darkMode
            ? "#111827"
            : "#f5f5f5",

        color:
          darkMode
            ? "white"
            : "#111827",
      }}
    >

      <h1 style={styles.heading}>
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (

        <h2>
          Cart is Empty
        </h2>

      ) : (

        <>

          {cartItems.map((item) => (

            <div
              key={item._id}
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

              {/* PRODUCT IMAGE */}
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                style={styles.image}
              />

              {/* PRODUCT DETAILS */}
              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price}
                </p>

                {/* QUANTITY */}
                <div style={styles.qtyContainer}>

                  <button
                    style={styles.qtyButton}
                    onClick={() =>
                      decreaseQty(item._id)
                    }
                  >
                    -
                  </button>

                  <span
                    style={styles.qtyText}
                  >
                    {item.qty}
                  </span>

                  <button
                    style={styles.qtyButton}
                    onClick={() =>
                      increaseQty(item._id)
                    }
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() =>
                    removeFromCart(item._id)
                  }
                  style={styles.removeButton}
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          {/* TOTAL */}
          <div style={styles.totalBox}>

            <h2>
              Total:
              {" "}
              ₹{totalPrice}
            </h2>

          </div>

          {/* PLACE ORDER */}
          <Link
            to="/payment"
            style={{
              textDecoration: "none",
            }}
          >

            <button
              style={styles.orderButton}
            >
              Place Order
            </button>

          </Link>

        </>
      )}

    </div>
  );
}

/* ================= STYLES ================= */

const styles = {

  container: {
    padding: "40px",
    minHeight: "100vh",
    transition: "0.3s",
  },

  heading: {
    marginBottom: "30px",
    fontSize: "42px",
  },

  card: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
    alignItems: "center",
    padding: "20px",
    borderRadius: "16px",
    boxShadow:
      "0px 4px 15px rgba(0,0,0,0.15)",
    transition: "0.3s",
  },

  image: {
    width: "160px",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  qtyContainer: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    marginTop: "15px",
  },

  qtyButton: {
    width: "38px",
    height: "38px",
    border: "none",
    background: "#2563eb",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  },

  qtyText: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  removeButton: {
    marginTop: "15px",
    padding: "12px",
    width: "160px",
    border: "none",
    background: "crimson",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  totalBox: {
    marginTop: "30px",
    marginBottom: "20px",
  },

  orderButton: {
    padding: "14px",
    width: "220px",
    border: "none",
    background: "green",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "17px",
    fontWeight: "bold",
  },

};

export default Cart;