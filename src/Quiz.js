// quiz to determine user preferences and for segmentation for email marketing
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    console.log("trying to get current user");
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

  const handleSubmit = () => {
    console.log("handle submit");
  };
  return (
    <div className="quiz-div">
      <Link className="home-page-link" to="/">
        plant • place
      </Link>
      <h1>
        Welcome {currentUser.firstName}
      </h1>
      <img
        alt="Picture of an iPad on desk that is surrounded by plants"
        src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>
      <h2>
        Share your plant preferences with us for special deals and offers on all
        your faves!
      </h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <label>What is you current skill level?</label>
        <select id="skill-level">
          <option>select</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <label>Do you have any pets?</label>
        <select id="pets">
          <option>select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>What size plants are you looking for?</label>
        <select id="plant-size">
          <option>select</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <input className="signup-button" type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default Quiz;
