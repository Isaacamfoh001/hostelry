import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import { useContext } from "react";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navItem">
          <Link className="hostelry" to="/">
            {/* <img
              src="../HostelryFrontEnd/src/component/navbar/photos/logo.jpeg"
              alt="logo"
              className="logo"
            /> */}
            <span>Hostlery</span>
          </Link>
          <button className="navBtn">List A Property</button>

          {user ? (
            <div className="userDiv">
              <span className="WelcomeUser">Welcome {user.username}</span>
              <button className="navBtn">Log Out</button>
            </div>
          ) : (
            <div className="userDiv">
              {/* <Link to="/register">
                <button className="navBtn">Register</button>
              </Link> */}
              <Link to="/login">
                <button className="navBtn">Register/Sign In</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
