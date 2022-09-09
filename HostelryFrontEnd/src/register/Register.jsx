import React, { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import "./register.css";
const Register = () => {
  return (
    <React.Fragment>
      <Navbar />
      <h1 className="registerHeader"> Register</h1>
      <div className="register">
        <div className="registerItem">
          <div className="firstName">
            <p>First Name</p>
            <input type="text" placeholder="" className="" />
          </div>
          <div className="lastName">
            <p>Last Name</p>
            <input type="text" placeholder="" className="" />
          </div>
          <div className="Email">
            <p>Email</p>
            <input type="text" placeholder="" className="" />
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password" placeholder="" className="" />
          </div>
          <div className="phoneNumber">
            <p>Phone number</p>
            <input type="text" placeholder="" className="" />
          </div>
          <button className="registerBtn">Register</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
