import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import ReactPaginate from "react-paginate";
import plantProducts from "./plantData";
import Navbar from "./Navbar";

export const HousePlants = () => {
  const navigate = useNavigate();
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

  const handleClick = (plant) => {
    navigate("/plantproduct/", { state: plant });
  };

  return (
    <div className="items-page">
      <h1>Shop our houseplants</h1>
      <div className="items">
        {slice.map((plant) => (
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
};

export default HousePlants;
