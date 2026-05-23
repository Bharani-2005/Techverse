import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Product({
  addToCart,
  addToWishlist,
  darkMode,
}) {

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // SEARCH
  const [search, setSearch] =
    useState("");

  // CATEGORY
  const [category, setCategory] =
    useState("All");

  const navigate = useNavigate();

  // FETCH PRODUCTS
  useEffect(() => {

    const fetchProducts =
      async () => {

        try {

          const { data } =
            await axios.get(
              "http://localhost:5000/api/products"
            );

          setProducts(
            Array.isArray(data)
              ? data
              : []
          );

          setLoading(false);

        } catch (error) {

          console.error(
            "Error fetching products:",
            error
          );

          setLoading(false);
        }
      };

    fetchProducts();

  }, []);

  // FILTER PRODUCTS
  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  // LOADING
  if (loading) {

    return (

      <div style={styles.loaderContainer}>

        <div style={styles.spinner}></div>

        <h2>
          Loading Products...
        </h2>

      </div>
    );
  }

  return (

    <div
      style={{
        ...styles.container,

        backgroundColor:
          darkMode
            ? "#0f172a"
            : "#f5f5f5",

        color:
          darkMode
            ? "white"
            : "black",
      }}
    >

      {/* HERO */}
      <div
        style={{
          ...styles.heroSection,

          background: darkMode
            ? "linear-gradient(135deg,#111827,#1f2937)"
            : "linear-gradient(135deg,#dbeafe,#ffffff)",

          color:
            darkMode
              ? "white"
              : "#111827",
        }}
      >

        <h1 style={styles.heroTitle}>
          Discover The Latest Tech
        </h1>

        <p style={styles.heroSubtitle}>
          Shop premium smartphones,
          laptops, gaming devices,
          cameras, accessories &
          more at the best prices.
        </p>

      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          ...styles.search,

          background:
            darkMode
              ? "#1e293b"
              : "white",

          color:
            darkMode
              ? "white"
              : "black",

          border:
            darkMode
              ? "1px solid #334155"
              : "1px solid #ccc",
        }}
      />

      {/* CATEGORY */}
      <div style={styles.categoryContainer}>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("All")
          }
        >
          All
        </button>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("Phones")
          }
        >
          Phones
        </button>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("Laptops")
          }
        >
          Laptops
        </button>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("Accessories")
          }
        >
          Accessories
        </button>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("Cameras")
          }
        >
          Cameras
        </button>

        <button
          style={{
            ...styles.categoryButton,
            background:
              darkMode
                ? "#334155"
                : "black",
          }}
          onClick={() =>
            setCategory("Gaming")
          }
        >
          Gaming
        </button>

      </div>

      {/* PRODUCT GRID */}
      <div style={styles.grid}>

        {filteredProducts.map(
          (product) => (

            <div
              key={product._id}
              style={{
                ...styles.card,

                background:
                  darkMode
                    ? "#1e293b"
                    : "white",
              }}
            >

              {/* LINK */}
              <Link
                to={`/product/${product._id}`}
                style={{
                  textDecoration:
                    "none",

                  color:
                    darkMode
                      ? "white"
                      : "black",
                }}
              >

                {/* IMAGE */}
                <div
                  style={
                    styles.imageWrapper
                  }
                >

                  <img
                    src={
                      product.image
                        ? `http://localhost:5000${product.image}`
                        : "https://via.placeholder.com/300"
                    }
                    alt={product.name}
                    style={styles.image}
                  />

                </div>

                {/* TITLE */}
                <h3 style={styles.title}>
                  {product.name}
                </h3>

                {/* PRICE */}
                <p style={styles.price}>
                  ₹{product.price}
                </p>

                {/* RATING */}
                <p style={styles.rating}>
                  ⭐ {product.rating}
                  {" "}
                  (
                  {product.reviews}
                  {" "}
                  Reviews
                  )
                </p>

              </Link>

              {/* ADD TO CART */}
              <button
                style={{
                  ...styles.button,

                  background:
                    darkMode
                      ? "#2563eb"
                      : "black",
                }}
                onClick={() => {

                  addToCart(product);

                  navigate("/cart");
                }}
              >
                Add To Cart
              </button>

              {/* WISHLIST */}
              <button
                style={
                  styles.heartButton
                }
                onClick={() =>
                  addToWishlist(
                    product
                  )
                }
              >
                ❤️
              </button>

            </div>
          )
        )}

      </div>

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

  heroSection: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "50px 20px",
    borderRadius: "20px",
    boxShadow:
      "0px 6px 20px rgba(0,0,0,0.2)",
  },

  heroTitle: {
    fontSize: "48px",
    marginBottom: "15px",
    fontWeight: "bold",
  },

  heroSubtitle: {
    fontSize: "18px",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.7",
  },

  search: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
  },

  categoryContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },

  categoryButton: {
    padding: "10px 18px",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
  },

  card: {
    padding: "15px",
    borderRadius: "12px",
    boxShadow:
      "0px 4px 12px rgba(0,0,0,0.1)",
    minHeight: "420px",
    display: "flex",
    flexDirection: "column",
    transition: "0.3s",
  },

  imageWrapper: {
    width: "100%",
    height: "220px",
    overflow: "hidden",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
  },

  price: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "18px",
  },

  rating: {
    textAlign: "center",
    color: "#f59e0b",
    fontWeight: "bold",
  },

  button: {
    marginTop: "auto",
    padding: "10px",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
  },

  heartButton: {
    marginTop: "10px",
    border: "none",
    background: "transparent",
    fontSize: "28px",
    cursor: "pointer",
  },

  loaderContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },

  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid #ddd",
    borderTop:
      "6px solid black",
    borderRadius: "50%",
    animation:
      "spin 1s linear infinite",
  },

};

export default Product;