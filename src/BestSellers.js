import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import Navbar from "./Navbar";

const bestSellers = [
  {
    name: "Monstera",
    id: "M1",
    skillLevel: "Beginner",
    plantSize: "Large",
    petSafe: false,
    price: 25,
    description:
      "The monstera, nicknamed the Swiss cheese plant because of its unique appearance, belongs to the arum (Araceae) family, which finds its roots in the American tropics. Wild monsteras are dispersed across the Caribbean, Florida, Asia, and Australia, as well as western Mediterranean areas like Portugal and Morocco. There are over 50 varieties of this climbing vine, but Monstera deliciosa and rhaphidophora tend to be the most popular indoor varieties",
    image:
      "https://cdn1.angusandceleste.com/wp-content/uploads/2019/04/09160136/Monstera-Angus-Celeste-Blog.jpg",
    quantity: 20,
    alt: "Monstera Plant.",
  },
  {
    name: "Rubber Plant",
    id: "R1",
    skillLevel: "Intermediate",
    plantSize: "Large",
    petSafe: false,
    price: 30,
    description:
      "Ficus elastica, also known as the rubber plant, is an unusual-looking varietal native to the tropics of Southeast Asia. This long-lived plant boasts oversized, oval-shaped leaves with a rich emerald hue and can grow quickly, reaching up to 100 feet tall in its natural habitat. It's not the easiest plant for beginners because it's not very forgiving if it doesn't get the care it needs. However, it's more often grown indoors as a houseplant, where it can be planted and cared for year-round, and its size is kept more manageable.",
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill_Large-Rubber-Tree_Large_Pallas_Green_Variant.jpg?v=1694485161&width=400",
    quantity: 5,
    alt: "Rubber Plant.",
  },

  {
    name: "Snake Plant",
    id: "S1",
    skillLevel: "Beginner",
    plantSize: "Large",
    petSafe: false,
    price: 12,
    description:
      "Snake plant (Sansevieria trifasciata) is a hardy and low-maintenance indoor plant known for its upright, sword-like leaves. It's an excellent air purifier and can thrive in a variety of lighting conditions, making it a popular choice for beginners.",
    image:
      "https://www.thespruce.com/thmb/JToiCM2g8ssRFBOyIvvB_G5pMDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/snake-plant-care-overview-1902772-04-d3990a1d0e1d4202a824e929abb12fc1-349b52d646f04f31962707a703b94298.jpeg",
    quantity: 20,
    alt: "Snake Plant.",
  },
  {
    name: "Fiddle Leaf Fig",
    id: "F1",
    skillLevel: "Advanced",
    plantSize: "Large",
    petSafe: false,
    price: 25,
    description:
      "The fiddle leaf fig (Ficus lyrata) is a trendy indoor plant with large, violin-shaped leaves. It's a favorite among interior designers and plant enthusiasts for its elegant appearance.",
    image:
      "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?q=80&w=2660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 10,
    alt: "Fiddle Leaf Fig Plant.",
  },
];

const BestSellers = () => {
  const navigate = useNavigate();
  const handleClick = (plant) => {
    navigate("/plantproduct/", { state: plant });
  };
  return (
    <div className="best-sellers-page">
      <h1>Best Sellers</h1>
      <div className="best-sellers">
        {bestSellers.map((bestSeller) => {
          return (
            <div className="best-seller" key={bestSeller.id}>
              <img src={bestSeller.image}></img>
              <h2>{bestSeller.name}</h2>
              <button
                onClick={() => {
                  handleClick(bestSeller);
                }}
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
