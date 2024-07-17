import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { RiPinterestLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="marketing-footer">
        <h3>Sign up for marketing emails</h3>
        <input type="text" placeholder="Sign up..."></input>
        <button className="search-button">
          <span role="img">sign-up</span>
        </button>
        <hr></hr>
      </div>
      <div className="follow-us-icons">
          <h3>Follow us</h3>
        <div className="social-icons">
          <FaInstagram />
          <CiMail />
          <RiPinterestLine />
        </div>
      </div>
      <div>
        <hr></hr>
        <p>Copyright @ 2024 <br></br>plant • place</p>
        <hr></hr>
        <p>Powered by Anna's great coding skills!</p>
      </div>
    </div>
  );
};

export default Footer;
