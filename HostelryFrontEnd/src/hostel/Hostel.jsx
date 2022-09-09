import React from "react";
import MailList from "../components/mailList/MailList";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./hostel.css";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
const Hostel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/accomodations/find/${id}`
  );
  const photos = [
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    },
    // {
    //   src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    // },
  ];
  const [slideNum, setSlideNum] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickEvent = (index) => {
    setSlideNum(index);
    console.log(`index: ${index}`);
    console.log(`slideNum: ${slideNum}`);
    setOpen(!open);
  };

  const handleMove = (direction) => {
    let newSlideNum;
    if (direction === "l") {
      newSlideNum = slideNum === 0 ? (newSlideNum = 3) : slideNum - 1;
    } else {
      newSlideNum = slideNum === 3 ? (newSlideNum = 0) : slideNum + 1;
    }

    setSlideNum(newSlideNum);
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <div className="hotelWrapper">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => {
                  setOpen(false);
                }}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrowLeft"
                onClick={() => {
                  handleMove("l");
                }}
              />
              <div className="sliderImages">
                <img src={photos[slideNum].src} alt="" className="slideimage" />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrowRight"
                onClick={() => {
                  handleMove("r");
                }}
              />
            </div>
          )}
          <h1 className="hotelTitle">{data.housingType}</h1>
          <span className="address">{data.address}</span>
          <span className="price">{data.price}</span>

          <div className="imageWrapper">
            {photos.map((photo, index) => (
              <div className="hotelImages">
                <img
                  src={photo.src}
                  alt=""
                  className="images"
                  onClick={() => handleClickEvent(index)}
                />
              </div>
            ))}

            {/* <div className="hotelImages">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
            </div>
            <div className="hotelImages">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
            </div>
            <div className="hotelImages">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
            </div>
            <div className="hotelImages">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="images"
              />
            </div> */}
          </div>
          <div className="hotelDesc">
            <table className="table" border="1" cellpadding="5" cellspacing="5">
              <tr>
                <th>Categories</th>
                <th>Key Details</th>
              </tr>
              <tr>
                <td>Bedrooms</td>
                <td>{data.bedrooms}</td>
              </tr>
              <tr>
                <td>Bathrooms</td>
                <td>{data.bathrooms}</td>
              </tr>
              <tr>
                <td>Payment plan</td>
                <td>{data.price} per year</td>
              </tr>
              <tr>
                <td>Distance from campus</td>
                <td>{data.distance}</td>
              </tr>
              <tr>
                <td>Furnished </td>
                <td>{data.furnished}</td>
              </tr>
              <tr>
                <td>Comission </td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Other descriptions</td>
                <td>{data.desc}</td>
              </tr>
            </table>
          </div>
          <button className="bookNow">Reserve/Book Now</button>

          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                width="600"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Lancaster%20University%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
              <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
              <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </React.Fragment>
  );
};

export default Hostel;
