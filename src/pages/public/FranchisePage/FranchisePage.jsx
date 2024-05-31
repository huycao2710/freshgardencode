import React from "react";

const FranchisePage = () => {
  return (
    <>
      <div className="relative w-full h-auto">
        <div class="absolute top-1/2 left-20 z-30 w-1/2 bg-opacity-50">
          <p className="text-justify text-5xl font-montserrat font-medium">
            CƠ HỘI NHƯỢNG QUYỀN<br></br> CÙNG CHÚNG TÔI
          </p>
        </div>
        <div class="absolute top-3/4 left-20 z-30 w-1/2 bg-opacity-50">
          <button class="mt-4 px-6 py-3 bg-logo-green text-black text-xl font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Đăng ký ngay
          </button>
        </div>
        <div class="relative z-10 w-screen">
          <img
            src="/assets/images/NhuongQuyen/BannerNQ.jpg"
            alt="Background Banner"
            class="w-full h-auto"
          />
        </div>
        <div class="absolute top-10 left-10 z-20">
          <img
            src="/assets/images/NhuongQuyen/NQnobg.jpg"
            alt="Overlay Banner"
            class="w-full h-auto"
          />
        </div>
      </div>

      {/* Tại sao là fresh garden */}
      <div className="about flex flex-col items-center justify-center">
        <div className="container flex items-center justify-center h-auto w-full py-10 ">
          <div className="header text-4xl ">
            <h2>Tại sao lại là Fresh Garden?</h2>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>

        <div className="container flex items-center justify-center h-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center p-4 rounded-lg">
              <img
                src="/assets/images/NhuongQuyen/WhyNQ1.jpg"
                alt="Hệ thống bài bản"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold">Hệ thống bài bản</h2>
              <div className="w-1/2">
                <p className="text-base text-center">
                  +100 cửa hàng tại miền Bắc
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <img
                src="/assets/images/NhuongQuyen/WhyNQ2.jpg"
                alt="Sản phẩm đa dạng"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold">Sản phẩm đa dạng</h2>
              <div className="w-1/2">
                <p className="text-base text-center">
                  +500 danh mục sản phẩm thay đổi định kỳ
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <img
                src="/assets/images/NhuongQuyen/WhyNQ3.jpg"
                alt="Dịch vụ chuyên nghiệp"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold">Dịch vụ chuyên nghiệp</h2>
              <div className="w-1/2">
                <p className="text-base text-center">
                  Mô hình nhà máy hiện đại & đội ngũ thợ bánh lành nghề
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg">
              <img
                src="/assets/images/NhuongQuyen/WhyNQ4.jpg"
                alt="Tệp khách tiềm năng"
                className="mb-4"
              />
              <h2 className="text-xl font-semibold">Tệp khách tiềm năng</h2>
              <div className="w-1/2">
                <p className="text-base text-center">
                  Hơn 12 năm phục vụ các khách hàng mọi lứa tuổi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mô tả */}
      <div className="relative">
        <div className="grid grid-cols-5 gap-4 py-10">
          <div className="col-span-3 p-4 text-justify">
            <p>
              Khởi nguồn từ tình yêu với những chiếc bánh cùng sứ mệnh mang đến
              những sản phẩm tốt nhất đến tay người tiêu dùng, cửa hàng bánh
              Fresh Garden đầu tiên đã ra đời. Một phần lớn trong sự thành công
              của chúng tôi trong hơn mười năm qua là nhờ vào việc không ngừng
              nỗ lực kiện toàn.
              <br />
              Hơn ai hết, chúng tôi hiểu rằng sự thành công còn đến từ sự hợp
              tác với các đối tác xuất sắc - những người có cùng đam mê, cùng
              khát vọng vươn lên, nâng cao giá trị bản thân. Nếu bạn quan tâm
              đến việc trở thành một đối tác, hoặc chỉ muốn biết thêm về Fresh
              Garden, hãy đọc tiếp và chúng tôi sẽ tiếp tục kể cho bạn nghe một
              chút câu chuyện về bản thân chúng tôi, thương hiệu của chúng tôi,
              và quá trình tìm kiếm những người mà chúng tôi mong muốn hợp tác.
              <br />
              Chúng tôi là sự khác biệt trong những thứ tốt nhất!
              <br />
              Trên hết, Fresh Garden là một thương hiệu phổ biến nhất về việc
              làm ra các sản phẩm bánh tuyệt vời và chất lượng như bánh mỳ tươi,
              bánh kem, bánh mỳ nướng… Chinh phục những khách hàng khó tính nhất
              bởi sự đa dạng trong chủng loại bánh, tinh tế từ kiểu dáng đến tỷ
              mỉ trong khâu chọn lựa nguyên liệu.
              <br />
              Các thợ làm bánh của chúng tôi luôn làm việc trong một môi trường
              thân thiện, vui vẻ và hạnh phúc từ đó tạo ra những chiếc bánh gửi
              gắm sự yêu thương đến với khách hàng, mang lại sự trải nghiệm đầy
              hứng khởi mỗi khi đến với Fresh Garden.
              <br />
              Mỗi một cửa hàng của chúng tôi sẽ mang đến cho khách hàng một câu
              chuyện thú vị, sự ấm cúng, gần gũi trong không gian, tiện ích
              trong mọi góc phố để tạo ra những điểm chạm trên hành trình sử
              dụng của khách hàng và đương nhiên, luôn có sự phục vụ chuyên
              nghiệp đồng nhất trên toàn hệ thống.
              <br />
              Khách hàng của chúng tôi đa dạng về văn hóa và lứa tuổi, phổ biến
              là học sinh, sinh viên và nhân viên văn phòng trẻ, chúng tôi còn
              được yêu thích bởi các gia đình đến những người nổi tiếng, tất cả
              đều chia sẻ tình yêu đối với những chiếc bánh tươi ngon chất lượng
              của một thương hiệu uy tín
            </p>
          </div>
          <div className="col-span-2 p-4 flex items-center justify-center text-center">
            <h1 className="text-5xl font-semibold font-playfairDisplay">
              Chúng tôi là sự khác biệt
              <br />
              trong những thứ tốt nhất!
            </h1>
          </div>
          <img
            src="/assets/images/NhuongQuyen/BannerNQ2.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
            alt="Background image"
          />
        </div>
      </div>

      {/*Minh hoạ*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-justify">
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-full max-h-460px"
            src="/assets/images/NhuongQuyen/SanPhamTuyetVoi.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="px-20 font-playfairDisplay max-w-3xl">
            <h2 className="text-5xl">Sản phẩm tuyệt vời</h2>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-xl">
              Fresh Garden là một thương hiệu phổ biến nhất về việc làm ra các
              sản phẩm bánh tuyệt vời và chất lượng như bánh mỳ tươi, bánh kem,
              bánh mỳ nướng… Chinh phục những khách hàng khó tính nhất bởi sự đa
              dạng trong chủng loại bánh.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="px-20 font-playfairDisplay max-w-3xl">
            <h2 className="text-5xl">Trao gửi tin yêu </h2>
            <hr className="h-px my-5  border-0 dark:bg-gray-700" />
            <p className="text-xl">
              Các thợ làm bánh của chúng tôi luôn làm việc trong một môi trường
              thân thiện, vui vẻ và hạnh phúc từ đó tạo ra những chiếc bánh gửi
              gắm sự yêu thương đến với khách hàng, mang lại sự trải nghiệm đầy
              hứng khởi mỗi khi đến với Fresh Garden.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-full max-h-460px"
            src="/assets/images/NhuongQuyen/TraoGuiTinhYeu.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-full max-h-460px"
            src="/assets/images/NhuongQuyen/KhongGianDayTraiNghiem.jpg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="px-20 font-playfairDisplay max-w-3xl">
            <h2 className="text-5xl">Không gian đầy trải nghiệm </h2>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-xl">
              Mỗi một cửa hàng của chúng tôi sẽ mang đến cho khách hàng một câu
              chuyện thú vị, sự ấm cúng, gần gũi trong không gian, tiện ích
              trong mọi góc phố để tạo ra những điểm chạm trên hành trình sử
              dụng của khách hàng và đương nhiên, luôn có sự phục vụ chuyên
              nghiệp đồng nhất trên toàn hệ thống.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="px-20 font-playfairDisplay max-w-3xl">
            <h2 className="text-5xl">Khách hàng nào cũng thích </h2>
            <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700" />
            <p className="text-xl">
              Khách hàng của chúng tôi đa dạng về văn hóa và lứa tuổi, phổ biến
              là học sinh, sinh viên và nhân viên văn phòng trẻ, chúng tôi còn
              được yêu thích bởi các gia đình đến những người nổi tiếng, tất cả
              đều chia sẻ tình yêu đối với những chiếc bánh tươi ngon chất lượng
              của một thương hiệu uy tín.
            </p>
          </div>
        </div>
        <div className="bg-gray-200 flex items-center justify-center">
          <img
            className="object-cover w-full max-h-460px"
            src="/assets/images/NhuongQuyen/KhachNaoCungThich.jpg"
            alt=""
          />
        </div>
      </div>

      {/* Đến với chúng tôi*/}
      <div className="bg-gray-200">
        <div className="flex items-center justify-center h-auto w-full py-10 ">
          <div className="header text-4xl ">
            <h2>Hãy đến với chúng tôi, nếu bạn:</h2>
            <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-justify ">
          <div className="flex flex-col items-center p-4 rounded-lg">
            <img
              src="/assets/images/NhuongQuyen/cwu1.jpg"
              alt="Hệ thống bài bản"
              className="mb-4"
            />
            <div className="w-2/3">
              <p className="text-xl text-center">
                Có tư duy tiên phong và bản lĩnh, ​kinh nghiệm kinh doanh
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg">
            <img
              src="/assets/images/NhuongQuyen/cwu2.jpg"
              alt="Hệ thống bài bản"
              className="mb-4"
            />
            <div className="w-2/3">
              <p className="text-xl text-center">
                Có khả năng làm việc độc lập như một ​doanh nhân và sẵn sàng là
                một phần của một hệ thống
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg">
            <img
              src="/assets/images/NhuongQuyen/cwu3.jpg"
              alt="Hệ thống bài bản"
              className="mb-4"
            />

            <div className="w-2/3">
              <p className="text-xl text-center">
                Khao khát và có khả năng xây dựng một ​ thương hiệu thành công
                tại khu vực của bạn.
              </p>
            </div>
          </div>
        </div>
        <hr className="h-px mt-5 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      {/*Đăng ký nhượng quyền*/}
      <div className="bg-gray-200">123456</div>

    </>
  );
};

export default FranchisePage;
