// Landing page carousel
import { useState, useEffect } from "react"
import SearchBar from "./SearchBar";
import { Helmet } from 'react-helmet-async';
import { UserContext } from "./UserContext";


const images = ["https://images.unsplash.com/photo-1598764557991-b9f211b73b81?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1665408511551-525a24a75ac5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1682174030823-b50796b4dcb2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1678652878688-e4638fbff9bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1609762751666-4ba213fb0b5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"];


const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState("https://images.unsplash.com/photo-1609762751666-4ba213fb0b5f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <div className="landing-page">
      <Helmet>
      <title>Houseplants and plant tools</title>
      <meta name='description' content='A website for affordable houseplants and plant tools' />
      <meta name="keywords" content="houseplants, plants, plant tools, affordable, aesthetic, gardening" />
      </Helmet>
       <div className="landing-page-div1">
        <img className="landing-page-image"
          src={currentImage}
          alt="Image of houseplants in a shop"
        ></img>
      </div>
      <div className="landing-page-div2">
        <h1>Your place for all things plants</h1>
        <p>
          Shop for house plants and plant accessories
          at an affordable price to begin or continue your
          plant journey!
        </p>
        <SearchBar />
      </div>
    </div>

  );
};

export default LandingPage;
