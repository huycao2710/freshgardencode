import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About2 = () => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/pages/point");
    window.scrollTo(0, 0); // Cuộn trang lên đầu khi người dùng click
  };
  return (
    <section className="home-about flex flex-col items-center py-10 mt-5">
      <div className="container mx-auto px-4 h-full">
        <div className="section-heading text-center mb-10">
          <h2 className="section-title text-5xl font-playfairDisplay text-gray-500">
            <div className="icon mb-5 flex justify-center items-center">
              <img src="/assets/images/TTD/TTDIcon.jpg" alt="icon" />
            </div>
            <span>Thẻ tích điểm Fresh Garden</span>
          </h2>
          <div className="desc text-base text-gray-500 mt-4">
            Thẻ khách hàng thân thiết giúp khách hàng sở hữu nhiều ưu đãi khi
            tích lũy đủ số điểm
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full px-4 lg:px-5">
          <div className="col-span-1 lg:col-span-1 flex items-end">
            <div className="home-about-image bg-logo-green flex justify-center items-center shadow-md w-5/6 h-5/6 py-12">
              <img
                src="/assets/images/TTD/TTD.jpg"
                alt="Câu chuyện Fresh Garden"
                className="w-full h-full shadow-md object-cover ml-40"
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1 flex justify-center">
            <div className="home-about-content p-10 bg-about-content h-fit w-auto text-white">
              <h3 className="text-2xl font-bold mb-4 font-playfairDisplay">
                Khách hàng thân thiết
              </h3>
              <p className=" py-6 mb-4 font-sans text-lg">
                Với mong muốn mang lại cho Quý khách hàng những lợi ích tốt nhất
                và đáp lại tình cảm tốt đẹp cùng đồng hành mà Quý khách đã dành
                cho Fresh Garden trong suốt thời gian qua, hệ thống triển khai
                chương trình tích lũy điểm khi mua hàng tại tất cả cửa hàng.
              </p>
              <div
                onClick={handleItemClick}
                className="flex items-center text-2xl cursor-pointer"
              >
                Xem thêm{" "}
                <i
                  className="fa fa-long-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
