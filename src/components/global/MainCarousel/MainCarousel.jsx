import React, { useRef, useState } from "react";
import { MainCarouselData } from "./MainCarouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay,  } from "swiper/modules";

const MainCarousel = () => {
  return (
    <div id="homeslider" className="h-screen max-h-41r">
        <Swiper
          className="w-full h-full"
          direction={"vertical"}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {MainCarouselData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center bg-white"
            >
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
     
    </div>
  );
};

export default MainCarousel;
