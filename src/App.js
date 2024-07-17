import "./styles.css";
import axios from "axios";
import LandingPage from "./LandingPage";
import BestSellers from "./BestSellers";
import Footer from "./Footer";


export default function App () {
  return (
      <div className="App">
        <LandingPage />
        <hr></hr>
        <BestSellers />
      </div>

  );
}

