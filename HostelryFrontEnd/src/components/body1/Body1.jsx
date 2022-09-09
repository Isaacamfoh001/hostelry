import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./body1.css";
import imageBuilding from "../../resources/building.webp";

const Body1 = () => {
  const [housing, setHousing] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/lists", { state: { housing, destination } });
  };

  return (
    <div className="body1">
      <div className="bodyContainer">
        <div className="bodyList">
          <div className="bodyImg">
            <img
              src={imageBuilding}
              // src="https://images.unsplash.com/photo-1568025848823-86404cd04ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
              alt=""
              className="imgCover"
            />
            <div className="bodyDesc">
              <h1>We help you save money on hostels!</h1>
              <h2>
                Every single hostel in the world | Compare prices with 1 click
              </h2>

              {/* <input
                type="text"
                placeholder="What type of apartment are you looking? For eg. One Bedroom, Two Bedroom etc"
                className="inputSearch"
                onChange={(e) => setHousing(e.target.value)}
              /> */}
              <select
                className="selectSearch"
                onChange={(e) => setHousing(e.target.value)}
                type="text"
                name=""
                placeholder="What type of apartment are you looking? For eg. One Bedroom, Two Bedroom etc"
                id=""
              >
                <option>Choose a preferred apartment type</option>
                <option
                  onSelect={(e) => setHousing(e.target.value)}
                  value="One bedroom"
                >
                  One bedroom
                </option>
                <option
                  onSelect={(e) => setHousing(e.target.value)}
                  value="Two bedroom"
                >
                  Two bedroom
                </option>
                <option
                  onSelect={(e) => setHousing(e.target.value)}
                  value="Three bedroom"
                >
                  Three bedroom
                </option>
              </select>
              <input
                type="text"
                placeholder="Preferred Location? For eg. Taifa, Tantra Hills etc"
                className="inputSearch"
                onChange={(e) => setDestination(e.target.value)}
              />
              {/* <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select> */}
              <button onClick={() => handleSearch()} className="btnSearch">
                <span className="Search">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
