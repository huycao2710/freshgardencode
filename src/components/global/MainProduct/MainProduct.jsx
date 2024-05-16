import React from "react";
import AliceCarousel from "react-alice-carousel";
import { MainProductData } from "./MainProductData";

const MainProduct = () => {
    const items = MainProductData.map((item)=>(
        <div key={item.id} className="flex justify-center items-center">
      <img
        className="cursor-pointer"
        role="presentation"
        src={item.image}
        alt=""
      />
    </div>
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
      <div className="container">
        <AliceCarousel
            items={items}
        />
      </div>
    </div>
      
    </>
  );
};

export default MainProduct;
