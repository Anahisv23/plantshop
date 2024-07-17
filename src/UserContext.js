import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  // this is where I left off
  // when I refresh the screen the user info goes away so i think i think fix teh get
  // current user in the backend
  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get("/auth/current");
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch current user", error);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export { UserContext, UserProvider };
