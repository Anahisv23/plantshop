import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <nav className="navbar navbar-mobile">
            <ul>
              <li>
                <Link className="home-page-link-nav" to="/">
                  plant • place
                </Link>
              </li>
              <li>
                <Link className="cart-icon" to="/products">
                  houseplants
                </Link>
              </li>
              <li>
                <Link className="cart-icon" to="/plant-tools">
                  plant tools
                </Link>
              </li>
              <li>
                <Link className="cart-icon" to="/cart">
                  cart
                </Link>
              </li>
              <li>
                <Link>logout</Link>
              </li>
            </ul>
            <hr></hr>
          </nav>
          <hr></hr>
        </div>
      ) : (
        <div>
          <nav className="navbar navbar-mobile">
            <ul>
              <Link className="home-page-link-nav" to="/">
                plant • place
              </Link>
              <li>
                <Link className="cart-icon" to="/products">
                  houseplants
                </Link>
              </li>
              <li>
                <Link className="cart-icon" to="/plant-tools">
                  plant tools
                </Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
              <li>
                <Link to="/signup">sign up</Link>
              </li>
              <li>
                <Link className="cart-icon" to="/cart">
                  cart
                </Link>
              </li>
            </ul>
          </nav>
          <hr></hr>
        </div>
      )}
    </div>
  );
};

export default Navbar;
