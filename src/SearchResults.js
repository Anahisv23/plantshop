import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const SearchResults = () => {
  const navigate = useNavigate();
  const results = useLocation();
  const arrayOfResults = results.state;


  const handleClick = (result) => {
    navigate("/plantproduct/", { state: result });
  };

  return (
    <div className="result-page">
      <br></br>
      <br></br>
      <Link className="home-link" to="/">
        plant • place
      </Link>
      <h1>your • search • results </h1>
      <div className="result-items">
        {arrayOfResults.length !== 0 ? (
          arrayOfResults.map((result) => {
            return (
              <div className="arrange-products">
                <h2>{result.name}</h2>
                <img
                  src={result.image}
                  alt={result.alt}
                  height="250px"
                  width="250px"
                ></img>
                <button
                  onClick={() => {
                    handleClick(result);
                  }}
                >
                  View Details
                </button>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <h2 style={{ textAlign: "center" }}>
            <span role="img">🥺</span><br></br>
              hmmm looks like we don't <br></br> have that in stock 
            </h2>
            <br></br>
            <Link to="/">
              <IoHomeOutline className="single-product-back-home" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
