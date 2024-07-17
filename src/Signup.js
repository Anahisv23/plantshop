import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const Signup = () => {
  const { setUser, setToken} = useContext(UserContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordChange = (e) => {
    setShowPassword(e.target.checked);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMarketingEmailCheckBox = (e) => {
    setMarketingEmails(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("in handle submit try");
      // form validations
      if (
        (!email.includes("@") || !email.includes(".com")) &&
        password.length > 8
      ) {
        setError("Must include a valid email address");
      } else if (
        (!email.includes("@") || !email.includes(".com")) &&
        password.length < 8
      ) {
        setError(
          "Must include a valid email address & password must be 8 characters or longer"
        );
      } else if (
        password.length < 8 &&
        email.includes("@") &&
        email.includes(".com")
      ) {
        setError("Password must be 8 characters or longer");
      } else if (
        password.length > 8 &&
        email.includes("@") &&
        email.includes(".com")
      ) {
        setError("");
        // connect to backend
        console.log("in signup sending to backend");
        const response = await axios.post("/auth/signup", {
          firstName,
          lastName,
          email,
          password,
          marketingEmails,
        });
        console.log("in signup return from backend", response.data);
        // set current user context to
       console.log("response", response.data)
        setUser(response.data)
        setToken(response.data.token)

        // set all inputs back to empty or false
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setMarketingEmails(false);
        setShowPassword(false);
        // redirect to quiz or homepage depending on if they wanted marketing emails

        if (response.data.marketingEmails) {
          console.log("going to quiz");
          navigate("/plant-quiz");
        } else {
          console.log("going to homepage");
          navigate("/");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("User already exists. Please try again.");
      } else {
        console.log(error);
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="signup-page">
      <div className="signup-form">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name"></label>
          <input
            type="text"
            placeholder="First name"
            name="first-name"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
          ></input>

          <label htmlFor="last-name"></label>
          <input
            type="text"
            placeholder="Last name"
            name="last-name"
            id="last-name"
            value={lastName}
            onChange={handleLastNameChange}
          ></input>

          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          ></input>

          <label htmlFor="password"></label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          ></input>

          <label htmlFor="show-password">Show Password</label>
          <input
            type="checkbox"
            name="show-password"
            id="show-password"
            checked={showPassword}
            onChange={handleShowPasswordChange}
          ></input>

          <p>Would you like to receive marketing emails?</p>
          <label htmlFor="marketing-emails"></label>
          <input
            type="checkbox"
            name="marketing-emails"
            id="marketing-emails"
            checked={marketingEmails}
            onChange={handleMarketingEmailCheckBox}
          ></input>

          <p>{error}</p>
          <input
            className="signup-button"
            type="submit"
            value="Sign-up"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Signup;
