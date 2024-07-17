import "./styles.css";
import LandingPage from "./LandingPage";
import BestSellers from "./BestSellers";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  const helmetContext = {};
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <LandingPage />
        <hr></hr>
        <BestSellers />
      </HelmetProvider>
    </div>
  );
}
