import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { MainProductData } from "./MainProductData";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { LocalGroceryStore } from "@mui/icons-material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const MainProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const getItemsInView = () => {
    if (window.innerWidth >= 1024) {
      return 4;
    } else if (window.innerWidth >= 720) {
      return 3;
    } else {
      return 2;
    }
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
    const itemsInView = getItemsInView();
    if (activeIndex < MainProductData.length - itemsInView) {
      carouselRef.current.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  console.log("Current active index:", activeIndex);
  const items = MainProductData.map((item) => (
    <div
      key={item.id}
      className="flex flex-col justify-center items-center py-5 cursor-pointer group"
    >
      <img
        className="object-cover"
        role="presentation"
        src={item.image}
        alt=""
      />
      <span className="text-white text-center mt-2">{item.name}</span>
      <span className="text-logo-green font-sans text-center mt-2">
        {item.price}
      </span>
      <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button variant="contained" className="w-12 h-12 bg-black">
          <LocalGroceryStore className="text-white" />
        </button>
        <button variant="contained" className="w-12 h-12 bg-black">
          <RemoveRedEyeIcon className="text-white" />
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <div className="icon flex justify-center items-center">
            <img src="/assets/images/SPNB/IconNB.jpg" alt="" />
          </div>
          <span className="py-5 text-white align-text-center flex justify-center items-center text-5xl font-playfairDisplay">
            Sản phẩm nổi bật
          </span>
          <div className="text-white text-base flex justify-center items-center font-sans">
            Cập nhật về những sản phẩm nổi bật nhất từ Fresh Garden
          </div>
        </div>

        <div className="container relative py-5 px-10">
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
              className="z-50 text-white bg-banner-black absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer flex justify-center items-center"
              shape="circle"
              icon={<LeftOutlined />}
              size="large"
              onClick={slidePrev}
            ></Button>
          }
          {
            <Button
              className="z-50 text-white bg-banner-black absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
              shape="circle"
              icon={<RightOutlined />}
              size="large"
              onClick={slideNext}
            ></Button>
          }
        </div>
      </div>
    </>
  );
};

export default MainProduct;
