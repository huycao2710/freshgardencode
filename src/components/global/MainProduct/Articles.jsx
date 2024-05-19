import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArticlesData } from "./ArticalesData";
const Articles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
  };

  const handleSlideChanged = (event) => {
    setActiveIndex(event.item);
  };

  const items = ArticlesData.map((item) => (
    <div className="articles-wrap w-auto h-auto border border-black mx-3">
      <div className="articles-image cursor-pointer">
        <img className="object-cover" src={item.image} alt="" />
      </div>

      <div className="articles-content py-8 px-4">
        <h3 className="title mb-4">
          <a href="">{item.title}</a>
        </h3>
        <div className="desc mb-16">
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="section-heading text-center mb-10">
        <h2 className="section-title text-5xl font-playfairDisplay text-gray-500">
          <div className="icon mb-5 flex justify-center items-center">
            <img src="/assets/images/TinTuc/TinTucIcon.jpg" alt="icon" />
          </div>
          <span>Tin tức</span>
          <div className="desc text-base text-gray-500 mt-4">
            Nơi Fresh Garden cập nhật thông tin mới nhất vê sản phẩm, cửa hàng
            và ưu đãi
          </div>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
      <div className="container relative py-5 px-10 select-none" >
        <AliceCarousel
          className="w-full h-full"
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          mouseTracking
          onSlideChanged={handleSlideChanged}
          activeIndex={activeIndex}
          ref={carouselRef}
        />
      </div>
      </div>
      
    </section>
  );
};

export default Articles;
