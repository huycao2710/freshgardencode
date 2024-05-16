import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { MainProductData } from "./MainProductData";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const MainProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };
  const handleSlideChanged = (event) => {
    setActiveIndex(event.item);
  };


const slidePrev = () => {
    if (activeIndex > 0) {
      carouselRef.current.slidePrev();
      setActiveIndex(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < MainProductData.length - 5) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };
  
  console.log("Current active index:", activeIndex);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = MainProductData.map((item) => (
    <img
      className="cursor-pointer flex justify-center items-center object-cover"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <div className="icon flex justify-center items-center">
            <img src="/assets/images/SP/IconSP.jpg" alt="" />
          </div>
          <span className="py-5 text-white align-text-center flex justify-center items-center text-5xl font-playfairDisplay">
            Sản phẩm nổi bật
          </span>
          <div className="text-white text-base flex justify-center items-center font-sans">
            Cập nhật về những sản phẩm nổi bật nhất từ Fresh Garden
          </div>
        </div>
        <div className="container relative py-5">
          <AliceCarousel
            className="w-full h-full"
            items={items}
            responsive={responsive}
            disableDotsControls
            disableButtonsControls
            onSlideChanged={handleSlideChanged}
            activeIndex={activeIndex}
            ref={carouselRef}
          />
          {
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="Next Slide"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          }
          {
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(-90deg)",
                bgcolor: "white",
              }}
              aria-label="Previous Slide"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          }
        </div>
      </div>
    </>
  );
};

export default MainProduct;
