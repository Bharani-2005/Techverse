import products from "../data/products.js";

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const product = products.find(
    (p) => p._id === req.params.id
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      message: "Product not found",
    });
  }
}