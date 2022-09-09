import React from "react";
import useFetch from "../../hooks/useFetch";
import "./body2.css";

const Body2 = () => {
  const images = [
    {
      src: "https://a0.muscache.com/im/pictures/8cb38bd5-c0a0-4b62-b033-6acfe7d4a5c7.jpg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/75b606fc-099a-45f2-b727-fad6b08d5b54.jpg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/e8aec730-9d56-43fe-8aa4-5c8ade95c845.jpg?im_w=480",
    },
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/5f677fae-b08a-40e2-aac0-d6c48db45d5b.jpg?im_w=720",
    },
    {
      src: "https://a0.muscache.com/im/pictures/miso/Hosting-54298460/original/2a4c487e-8961-4d9c-85af-43b271dca7cb.jpeg?im_w=720",
    },

    {
      src: "https://a0.muscache.com/im/pictures/8cb38bd5-c0a0-4b62-b033-6acfe7d4a5c7.jpg?im_w=720",
    },
    // {
    //   src: "https://a0.muscache.com/im/pictures/8cb38bd5-c0a0-4b62-b033-6acfe7d4a5c7.jpg?im_w=720",
    // },
  ];

  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:3000/api/accomodations/search"
  );
  console.log(`loading : ${loading}`);
  console.log(`data : ${data}`);

  return (
    <div className="body2">
      <div className="latest">
        <h1>Latest Property Listings</h1>
      </div>
      {loading ? (
        "Please wait..."
      ) : (
        <div className="body2Container">
          {data &&
            images.map((image, index) => (
              <div className="imgWrapper" key={index}>
                <div className="body2Item">
                  <img src={image.src} alt="" className="body2img" />
                  <div className="body2Desc">
                    <span className="address"> {data[index]?.address}</span>
                    <span className="price">Ghc {data[index]?.price}</span>
                    {/* Add Bedroom and bathroom icons */}
                  </div>
                </div>
              </div>
            ))}

          {/* <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/75b606fc-099a-45f2-b727-fad6b08d5b54.jpg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/e8aec730-9d56-43fe-8aa4-5c8ade95c845.jpg?im_w=480"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53113162/original/d308ebd3-7373-46c4-8a10-57ac8da8c755.jpeg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-54298460/original/2a4c487e-8961-4d9c-85af-43b271dca7cb.jpeg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/5f677fae-b08a-40e2-aac0-d6c48db45d5b.jpg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/8cb38bd5-c0a0-4b62-b033-6acfe7d4a5c7.jpg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <div className="body2Item">
              <img
                src="https://a0.muscache.com/im/pictures/8cb38bd5-c0a0-4b62-b033-6acfe7d4a5c7.jpg?im_w=720"
                alt=""
                className="body2img"
              />
              <div className="body2Desc">
                <span className="address">
                  Executive 3 bedroom apartment for rent, Oyarifa Ghana
                </span>
                <span className="price">GHS 10,000 per year</span>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Body2;
