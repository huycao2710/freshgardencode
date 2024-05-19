import React from "react";

const About2 = () => {
  return (
    <section className="home-about flex flex-col items-center py-10 mt-5">
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
                Câu chuyện về chiếc bánh tươi
              </h3>
              <p className="px-4 py-6 mb-4 font-sans text-lg">
                Hơn 12 năm không ngừng phát triển, Fresh Garden - "Bánh tươi mỗi
                ngày" với sứ mệnh xuyên suốt mang đến khách hàng những sản phẩm
                dinh dưỡng - an toàn - tự nhiên tốt cho sức khỏe người dùng.
              </p>
              <a href="/pages/about-us" className="flex items-center text-2xl ">
                Xem thêm{" "}
                <i
                  className="fa fa-long-arrow-right ml-2"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
