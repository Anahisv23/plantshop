import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import plantProducts from "./plantData";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = () => {
  const navigate = useNavigate();
  const [totalPurchaseCost, setTotalPurchaseCost] = useState(0);
  const [userCartItems, setUserCartItems] = useState([]);
  const [error, setError] = useState("");

  const sendToCheckOut = () => {
    if (userCartItems.length === 0) {
      setError("There are no items in your cart");
    } else {
      localStorage.removeItem("cartItems");
      navigate("/checkout");
    }
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < userCartItems.length; i++) {
      total += userCartItems[i].price * userCartItems[i].amountUserWants;
    }

    setTotalPurchaseCost(total);
  }, [userCartItems]);

  useEffect(() => {
    const storedCartJSON = localStorage.getItem("cartItems");

    // Parse the JSON string into an array or use an empty array as a default
    const storedCartArray = JSON.parse(storedCartJSON) || [];

    // Set the array back in local storage as a JSON string
    localStorage.setItem("cartItems", JSON.stringify(storedCartArray));
    setUserCartItems(storedCartArray);
  }, []);

  const removeItemFromCart = (plantToRemove) => {
    const updatedProductsAfterRemoval = userCartItems.filter((plantInCart) => {
      return plantInCart.name !== plantToRemove.name;
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(updatedProductsAfterRemoval)
    );
    setUserCartItems(updatedProductsAfterRemoval);
  };

  return (
    <div className="cart-screen">
      <Navbar />
      <h1>Welcome to your cart </h1>
      {userCartItems.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>
          Nothing to see here <span role="img">🥺</span>
        </h2>
      ) : (
        userCartItems.map((plant) => {
          return (
            <div className="items-in-cart">
              <h3>{plant.name}</h3>
              <img className="cart-img" alt={plant.alt} src={plant.image}></img>
              <h4>Price ${plant.price}</h4>
              <h4>Quantity {plant.amountUserWants}</h4>
              <button
                onClick={() => {
                  removeItemFromCart(plant);
                }}
              >
                Remove item
              </button>
            </div>
          );
        })
      )}
      <div className="purchase-details">
        <h4>Total Purchase Cost ${totalPurchaseCost}</h4>
        <button onClick={sendToCheckOut}>Check Out</button>
        <p className="error-message">{error}</p>
        <br></br>
        <br></br>
        <Link className="single-product-back-home" to="/">
          <IoHomeOutline />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
