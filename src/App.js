import "./styles.css";
import Navbar from "./Navbar";
import { useState, createContext, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";
import BestSellers from "./BestSellers";
import Footer from "./Footer";

// create context with default value
// export const CurrentUserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => { },
// });

export default function App() {
  // useEffect(() => {
  //   const getCurrentUser = async () => {
  //     try {
  //       const response = await axios.get("/auth/current");
  //       setCurrentUser(response.data);
  //     } catch (error) {
  //       console.error("Failed to fetch current user", error);
  //     }
  //   };
  //   getCurrentUser();
  // }, []);

  return (
    <div className="App">
      {/* <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      > */}
      <Navbar />
      <br></br>
      <LandingPage />
      <hr></hr>
      <BestSellers />
      <Footer />
      {/* </CurrentUserContext.Provider> */}
    </div>
  );
}
