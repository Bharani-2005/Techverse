import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductDetails({ addToCart }) {

  const { id } = useParams(); // ✅ get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!id) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );

        setProduct(res.data); // ✅ IMPORTANT FIX
        setLoading(false);

      } catch (err) {
        console.log("Error fetching product:", err);
        setLoading(false);
      }
    };

    fetchProduct();

  }, [id]);

  // DEBUG (optional)
  console.log("Product ID:", id);
  console.log("Product Data:", product);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (

    <div style={styles.container}>

      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        style={styles.image}
      />

      <div style={styles.details}>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p
          style={{
            color: "#f59e0b",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ⭐ {product.rating} ({product.reviews} Reviews)
        </p>

        <p>
          Premium quality product with latest features.
        </p>

        <button
          style={styles.button}
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    flexWrap: "wrap",
  },

  image: {
    width: "350px",
    borderRadius: "10px",
  },

  details: {
    maxWidth: "500px",
  },

  button: {
    padding: "12px 20px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default ProductDetails;