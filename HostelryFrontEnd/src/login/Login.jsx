import React from "react";
import { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import { AuthContext } from "../context/AuthContext";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  console.log(`user: ${user}`);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auths/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="loginHeader">Login</h1>
      <div className="login">
        <div className="loginItem">
          <div className="E">
            <p>Your Email</p>
            <input
              type="text"
              placeholder="email"
              className="Email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input
              type="password"
              placeholder="password"
              id="password"
              className="Password"
              onChange={handleChange}
            />
          </div>
          <p>
            {" "}
            Do not have an account? <a href="/register"> Sign Up here</a>
          </p>

          <button disabled={loading} className="loginBtn" onClick={handleClick}>
            LOGIN
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
