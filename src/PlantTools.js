// plant tools
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const plantTools = [
  {
    name: "Hand Trowel",
    price: 8,
    img: "https://www.botanicalinterests.com/cdn/shop/files/9137i_hand-trowel.jpg?v=1715191397",
  },
  {
    name: "Scissors",
    price: 10,
    img: "https://m.media-amazon.com/images/I/51f7Yduge2L.jpg",
  },
  {
    name: "Watering Can",
    price: 5,
    img: "https://m.media-amazon.com/images/I/51a6swyFLXL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Gloves",
    price: 7,
    img: "https://cdn.shopify.com/s/files/1/0268/1461/1546/files/ACS_0216_480x480.jpg?v=1647896848",
  },
  {
    name: "Mister",
    price: 5,
    img: "https://www.ikea.com/us/en/images/products/gradvis-plant-mister-clear-glass-gold__1010738_pe828354_s5.jpg?f=s",
  },
  {
    name: "Pots",
    price: 5,
    img: "https://images.thdstatic.com/productImages/76d9ad91-e3cb-4a21-a37a-7d7b8fc17912/svn/terra-cotta-pennington-plant-pots-100506840-64_600.jpg",
  },
];

const PlantTools = () => {
  return (
    <div className="plant-tools-div">
      <Navbar />
      <div className="plant-tools-page">
        <hr></hr>
        <h1>Shop our plant tools</h1>
        <div className="plant-tools">
          {plantTools.map((tool) => {
            return (
              <div className="one-tool">
                <img src={tool.img}></img>
                <h1>{tool.name}</h1>
                <button>View Details</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlantTools;
