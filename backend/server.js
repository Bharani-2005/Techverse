
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ IMPORTANT: serve static images

app.use("/images", express.static("public/images"));
// connect DB
connectDB();

// API: get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// API: get single product (IMPORTANT for ProductDetails page)
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});