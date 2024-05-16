import React from "react";
import { MainCarouselData } from "./MainCarouselData";
import { Carousel } from "antd";

const items = MainCarouselData.map((item) => (
  <img
    className="cursor-pointer -z-10"
    role="presentation"
    src={item.image}
    alt=""
  />
));

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const MainCarousel = () => {
  return (
    <>
      <div style={{ width: "100%", margin: "0 auto" }}>
        <Carousel arrows dotPosition="left" infinite={false} autoplay>
          {MainCarouselData.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  height: "500px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#364d79",
                }}
              >
                <img
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
