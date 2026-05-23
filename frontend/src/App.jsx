import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import OrderSuccess from "./pages/OrderSuccess";
import Products from "./pages/Products";
import Payment from "./pages/Payment";

function App() {

  // CART STATE
  const [cartItems, setCartItems] =
    useState([]);

  // WISHLIST STATE
  const [
    wishlistItems,
    setWishlistItems,
  ] = useState([]);

  // DARK MODE
  const [darkMode, setDarkMode] =
    useState(false);

  // ADD TO CART
  const addToCart = (product) => {

    const exist = cartItems.find(
      (item) =>
        item._id === product._id
    );

    if (exist) {

      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  // INCREASE QTY
  const increaseQty = (id) => {

    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id) => {

    setCartItems(
      cartItems
        .map((item) =>
          item._id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter(
          (item) => item.qty > 0
        )
    );
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {

    setCartItems(
      cartItems.filter(
        (item) => item._id !== id
      )
    );
  };

  // ADD TO WISHLIST
  const addToWishlist = (
    product
  ) => {

    const exist =
      wishlistItems.find(
        (item) =>
          item._id === product._id
      );

    if (!exist) {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };

  // REMOVE WISHLIST
  const removeWishlist = (id) => {

    setWishlistItems(
      wishlistItems.filter(
        (item) => item._id !== id
      )
    );
  };

  return (

    <div
      style={{
        backgroundColor:
          darkMode
            ? "#0f172a"
            : "#ffffff",

        color:
          darkMode
            ? "white"
            : "black",

        minHeight: "100vh",

        transition: "0.3s",
      }}
    >

      {/* NAVBAR */}
      <Navbar
        cartItems={cartItems}
        wishlistItems={
          wishlistItems
        }
        darkMode={darkMode}
        setDarkMode={
          setDarkMode
        }
      />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Home
              addToCart={
                addToCart
              }
              addToWishlist={
                addToWishlist
              }
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <Products
              addToCart={
                addToCart
              }
              addToWishlist={
                addToWishlist
              }
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={
                addToCart
              }
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={
                cartItems
              }
              increaseQty={
                increaseQty
              }
              decreaseQty={
                decreaseQty
              }
              removeFromCart={
                removeFromCart
              }
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* WISHLIST */}
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={
                wishlistItems
              }
              removeWishlist={
                removeWishlist
              }
              addToCart={
                addToCart
              }
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={
            <Login
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* PAYMENT */}
        <Route
          path="/payment"
          element={
            <Payment
              darkMode={
                darkMode
              }
            />
          }
        />

        {/* SUCCESS */}
        <Route
          path="/success"
          element={
            <OrderSuccess
              darkMode={
                darkMode
              }
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;