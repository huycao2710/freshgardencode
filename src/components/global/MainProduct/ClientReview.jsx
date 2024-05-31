import React from "react";
import { ClientReviewData } from "./ClientReviewData";
import AliceCarousel from "react-alice-carousel";

const ClientReview = () => {
  const items = ClientReviewData.map((item) => (
    <div className="articles-wrap w-auto h-auto border rounded-lg p-16 px-24 bg-about-content text-white max-w-lg mx-auto">
      <div className="articles-image cursor-pointer flex justify-center items-center ">
        <img className="object-cover rounded-lg" src={item.image} alt="" />
      </div>

      <div className="articles-content py-8 px-4 flex flex-col justify-center items-center">
        <div>
          <h3 className="">
            <a href="">{item.title}</a>
          </h3>
        </div>
        <div className="">
          <p className=''>{item.desc}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="section-heading text-center mb-10">
        <h2 className="section-title text-5xl font-playfairDisplay text-gray-500">
          <div className="icon mb-5 flex justify-center items-center">
            <img src="/assets/images/KH/KHIcon.jpg" alt="icon" />
          </div>
          <span>Khách hàng và Fresh Garden</span>
        </h2>
        <div className="desc text-base text-gray-500 mt-4">
          Nơi Fresh Garden lưu giữ những cảm nhận và phản hồi của khách hàng
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="container relative select-none justify-center content-center px-72 ">
          <AliceCarousel
            items={items}
            disableDotsControls
            disableButtonsControls
            mouseTracking
          />
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
