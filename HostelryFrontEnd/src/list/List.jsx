import React from "react";
import Navbar from "../components/navbar/Navbar";
import "./list.css";
import Footer from "../components/footer/Footer";
import MailList from "../components/mailList/MailList";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [housing, setHousing] = useState(location.state.housing);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:3000/api/accomodations/search?housingType=${housing}&min=${
      min || 1
    }&max=${max || 200000}`
  );

  const handleSearchClick = () => {
    reFetch();
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="listWrapper">
          <div className="searchSection">
            <h2 className="search">Search</h2>
            <span className="destination">Destination</span>
            <input
              type="text"
              placeholder={destination}
              className="inputDestination"
              onChange={(e) => setDestination(e.target.value)}
            />
            <span className="hostelType">How many bedrooms</span>

            <select
              className="selectSearch"
              onChange={(e) => setHousing(e.target.value)}
              type="text"
              name=""
              placeholder="What type of apartment are you looking? For eg. One Bedroom, Two Bedroom etc"
              id=""
            >
              <option disabled>Change Housing preference</option>
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

            <p className="hostelType">Set your budget </p>
            <div className="priceRange">
              <div className="minPrice">
                <span className="minPriceContainer">min price</span>
                <input
                  type="number"
                  placeholder="Min Price"
                  className="inputDestination"
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>

              <div className="maxPriceContainer">
                <span className="maxPrice">max price</span>
                <input
                  type="number"
                  placeholder="Max Price"
                  className="inputDestination"
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
            </div>

            <button className="searchBtn" onClick={() => handleSearchClick}>
              Search
            </button>
          </div>
          <div className="imageWrapper">
            {loading
              ? "It is loading"
              : data.map((item) => (
                  <div className="imagesContainer" key={item._id}>
                    <img
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                      alt=""
                      className="images"
                    />
                    <div className="imageContent">
                      <h3 className="title"> {item.housingType}</h3>
                      <span className="address">{item.address}</span>
                      <span className="price">{item.price}</span>
                    </div>

                    <button className="bookNow">Request For A Tour</button>
                    <Link to={`/hostel/${item._id}`}>
                      <button className="bookNow">Book Now</button>
                    </Link>
                  </div>
                ))}

            {/* <div className="imagesContainer">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
              <div className="imageContent">
                <h3 className="title"> 2 Bedroom house</h3>
                <span className="address">Near Lancaster University</span>
                <span className="price">GHS 10000</span>
              </div>

              <button className="bookNow">Request For A Tour</button>
              <button className="bookNow">Book Now</button>
            </div> */}
            {/* <div className="imagesContainer">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
              <div className="imageContent">
                <h3 className="title"> 2 Bedroom house</h3>
                <span className="address">Near Lancaster University</span>
                <span className="price">GHS 10000</span>
              </div>

              <button className="bookNow">Request For A Tour</button>
              <button className="bookNow">Book Now</button>
            </div> */}
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </React.Fragment>
  );
};

export default List;
