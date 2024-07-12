// will allow users to search our stock

import plantProducts from "./plantData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// search algo here

const searchForSpecificProduct = (arrayOfProducts, userInput) => {
  let relevantProductFromUserSearch = [];
  let lowerCaseUserInput = userInput.toLowerCase();

  if (userInput === "") return arrayOfProducts;

  for (let i = 0; i < arrayOfProducts.length; i++) {
    let lowerCaseProductName = arrayOfProducts[i].name.toLowerCase();
    if (lowerCaseProductName.includes(lowerCaseUserInput)) {
      relevantProductFromUserSearch.push(arrayOfProducts[i]);
    }
  }

  return relevantProductFromUserSearch;
};

const SearchBar = ({ setProducts }) => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    const productsBasedOnUserSearch = searchForSpecificProduct(
      plantProducts,
      userInput
    );
    navigate("/searchresults/", { state: productsBasedOnUserSearch });
  };

  return (
    <div>
      <input
        type="text"
        placeholder=" Search your magical plants..."
        onChange={handleChange}
        value={userInput}
      ></input>
      <button onClick={handleClick} className="search-button">
        <span role="img">🔍</span>
      </button>
    </div>
  );
};

export default SearchBar;
