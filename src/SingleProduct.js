import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";

const SingleProduct = () => {
  const plantProduct = useLocation();
  const { name, price, image, description, quantity, alt } = plantProduct.state;
  let [amountUserWants, setAmountUserWants] = useState(0);
  const [userFeedback, setUserFeedback] = useState("");

  // for increase
  let [disabled, setDisable] = useState(false);
  // for decrease
  let [enable, setEnable] = useState(true);

  useEffect(() => {
    if (amountUserWants > 0 && amountUserWants !== quantity) {
      // enable increase
      setDisable(false);
      // enable decrease
      setEnable(false);
    } else if (amountUserWants === quantity) {
      // disable increase
      setDisable(true);
    } else if (amountUserWants === 0) {
      // disable decrease
      setEnable(true);
    }
  }, [amountUserWants]);

  const handleQuantityChanges = (e) => {
    if (e.target.name === "increase") {
      setAmountUserWants(++amountUserWants);
    } else {
      setAmountUserWants(--amountUserWants);
    }
  };

  const addToCartClick = (plantToAddToCart) => {
    if (amountUserWants === 0) {
      setUserFeedback("Add a valid quantity");
    } else {
      let cartItemsFromLocalStorage = localStorage.getItem("cartItems");
      let cartItems = JSON.parse(cartItemsFromLocalStorage) || [];

      plantToAddToCart.amountUserWants = amountUserWants;
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, plantToAddToCart])
      );
      setUserFeedback("Added!");
    }
  };

  return (
    <div className="single-product">
      <Link className="home-link" to="/">
        plant • place
      </Link>
      <h1>{name}</h1>
      <img src={image} alt={alt} height="250px" width="250px"></img>
      <h2>About</h2>
      <p>{description}</p>
      <h2>Price ${price}</h2>
      <h3>Adjust quantity below</h3>
      <input type="text" disabled value={amountUserWants}></input>
      <div>
        <button
          name="decrease"
          disabled={enable}
          onClick={handleQuantityChanges}
          className="add-delete"
        >
          -
        </button>
        <button
          name="increase"
          disabled={disabled}
          onClick={handleQuantityChanges}
          className="add-delete"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          addToCartClick(plantProduct.state);
        }}
        className="add-to-cart"
      >
        Add to Cart
      </button>
      <h4>{userFeedback}</h4>
      <br></br>
      <br></br>
      <div className="single-product-icons">
        <Link className="single-product-back-home" to="/">
          <IoHomeOutline />
        </Link>
        <Link className="cart-icon" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
