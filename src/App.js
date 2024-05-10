import "./styles.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import plantProducts from "./plantData";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

const Items = ({ products }) => {
  const navigate = useNavigate();

  const handleClick = (plant) => {
    navigate("/plantproduct/", { state: plant });
  };

  return (
    <div className="items">
      {products.map((plant) => (
        <div className="one-item" key={plant.name}>
          <h1>{plant.name}</h1>
          <img
            src={plant.image}
            alt={plant.alt}
            height="250px"
            width="250px"
          ></img>
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

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const newOffSet = (selectedPage * perPage) % products.length;
    setOffset(newOffSet);
  };

  // const handleRequest = async () => {
  //   const isBackendConnected = await axios.get('/api/random/')
  //   console.log("is backend connected", isBackendConnected)
  // }

  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={handleRequest}>Click me</button> */}

      <br></br>
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
    </div>
  );
}
