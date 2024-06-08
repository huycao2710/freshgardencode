import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate("/pages/about_us");
    window.scrollTo(0, 0); // Cuộn trang lên đầu khi người dùng click
  };
  return (
    <section className="home-about flex flex-col items-center py-10">
      <div className="container mx-auto px-4 h-full">
        <div className="section-heading text-center mb-10">
          <h2 className="section-title text-5xl font-playfairDisplay text-gray-500">
            <div className="icon mb-5 flex justify-center items-center">
              <img src="/assets/images/Story/storyIcon.jpg" alt="icon" />
            </div>
            <span>Câu chuyện Fresh Garden</span>
          </h2>
          <div className="desc text-base text-gray-500 mt-4">
            Fresh Garden là thương hiệu bánh Việt được xây dựng từ tình yêu qua
            những thông điệp ngọt ngào trong mỗi chiếc bánh.
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="home-about-content p-10 bg-about-content h-full text-white">
              <h3 className="text-2xl font-bold mb-4 font-playfairDisplay">
                Câu chuyện về chiếc bánh tươi
              </h3>
              <p className="py-6 mb-4 font-sans text-lg">
                Hơn 12 năm không ngừng phát triển, Fresh Garden - "Bánh tươi mỗi
                ngày" với sứ mệnh xuyên suốt mang đến khách hàng những sản phẩm
                dinh dưỡng - an toàn - tự nhiên tốt cho sức khỏe người dùng.
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
          <div className="w-full lg:w-1/2 px-4 pr-36">
            <div className="home-about-image bg-logo-green flex justify-center items-center h-full p-4 shadow-md mt-14">
              <img
                src="/assets/images/Story/story.jpg"
                alt="Câu chuyện Fresh Garden"
                className="w-full h-auto shadow-md object-cover ml-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
