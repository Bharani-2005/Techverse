import React from "react";

function Wishlist({
  wishlistItems,
  removeWishlist,
  addToCart,
}) {

  return (
    <div style={{ padding: "40px" }}>

      <h1>Wishlist</h1>

      {wishlistItems.length === 0 ? (

        <h2>No Wishlist Items</h2>

      ) : (

        wishlistItems.map((item) => (

          <div
            key={item._id}
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
              alignItems: "center",
              background: "#f5f5f5",
              padding: "20px",
              borderRadius: "10px",
            }}
          >

            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.name}
              width="120"
            />

            <div>

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button
                onClick={() =>
                  addToCart(item)
                }
                style={{
                  marginRight: "10px",
                }}
              >
                Add To Cart
              </button>

              <button
                onClick={() =>
                  removeWishlist(item._id)
                }
              >
                Remove
              </button>

            </div>

          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;