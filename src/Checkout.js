import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Checkout = () => {
  return (
    <div className="checkout">
      <Navbar />
      <img src="https://www.huntingforgeorge.com/wp-content/uploads/Feature-Best-Winter-Plants-Hunting-for-George-Community-Journal-extra.jpg"></img>
      <h2>
        Thank you for your purchase<br></br> See you again soon!
      </h2>
      <Link className="single-product-back-home" to="/">
        <IoHomeOutline />
      </Link>
    </div>
  );
};

export default Checkout;
