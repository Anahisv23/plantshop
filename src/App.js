import "./styles.css";
import ReactPaginate from "react-paginate";
import plantProducts from "./plantData";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";

export const Items = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (plant) => {
    navigate("/plantproduct/", { state: plant });
  };

  return (
    <div className="items">
      {products.map((plant) => (
        <div className="one-item" key={plant.name}>
           <img
            src={plant.image}
            alt={plant.alt}
            height="250px"
            width="250px"
          ></img>
           <h1>{plant.name}</h1>
          <button
            onClick={() => {
              handleClick(plant);
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

// create context with default value
export const CurrentUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => { },
});

export default function App() {
  // offset is the index that represents the first item to be displayed on curr page
  const [offset, setOffset] = useState(0);
  // perpage is how many items we will display perpage
  const [perPage] = useState(5);
  const [products, setProducts] = useState(plantProducts);
  // pagecount is how many pages we will include in our pragination bar
  const pageCount = Math.ceil(products.length / perPage);
  // slice is the amount of data we will show
  const slice = products.slice(offset, offset + perPage);

  const [currentUser, setCurrentUser] = useState(null);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const newOffSet = (selectedPage * perPage) % products.length;
    setOffset(newOffSet);
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get("/auth/current");
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Failed to fetch current user", error);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <Navbar />
        <br></br>
        <LandingPage />
        <hr></hr>
        <Items products={slice} />

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
