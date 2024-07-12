// Landing page carousel
import SearchBar from "./SearchBar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-div1">
        <h1>Your place for all things plants</h1>
        <p>
            Shop for house plants and plant accessories
          at an affordable price to begin or continue your
          plant journey!
        </p>
        <SearchBar />
      </div>
      <div className="landing-page-div2">
        <img className="landing-page-image"
          src="https://images.unsplash.com/photo-1598764557991-b9f211b73b81?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image of houseplants in a shop"
        ></img>
      </div>
    </div>
    
  );
};

export default LandingPage;
