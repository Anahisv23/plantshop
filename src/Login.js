import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

const Login = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleShowPasswordChange = (e) => {
        setShowPassword(e.target.checked);
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/auth/login", { firstName, password })
            setFirstName("");
            setPassword("");
            setShowPassword(false);
            setError("")
            // redirect to user dashboard
            navigate("/")
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Name or Password are incorrect. Please try again.");
            } else {
                setError("An unexpected error occurred. Please try again later.");
            }
        }
    };

    return (
        <div className="login-page">
            <Link className="home-page-link" to="/">
                plant • place
            </Link>
            <div className="login-form">
                <h1>Login</h1>
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
                    <p>{error}</p>
                    <input className="login-button" type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    );
};

export default Login;
