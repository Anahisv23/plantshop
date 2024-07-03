import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBar from "./SearchBar";
import axios from "axios"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="home-page-link-nav" to="/">
          plant • place
        </Link>
        <ul>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/signup">sign up</Link>
          </li>
          <li>
            <Link className="cart-icon" to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </div>
  );
};

export default Navbar;
