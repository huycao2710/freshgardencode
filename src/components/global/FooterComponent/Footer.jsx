import React from "react";
import { LocationOn, PhoneInTalk } from "@mui/icons-material";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Footer = () => {
  return (
    <div
      className="font-montserrat"
      style={{ backgroundImage: 'url("assets/images/Header/nenHeader.jpg")' }}
    >
      <div className="grid grid-cols-2 text-white px-96">
        <div className="flex flex-col items-start p-4 rounded-lg">
          <h2 className="text-xl mb-4 text-logo-green">Để lại lời nhắn</h2>
          <form className="flex flex-col w-full max-w-lg">
            <input
              type="text"
              placeholder="Tên của bạn"
              className="mb-5 p-2 border border-gray-300 text-black"
            />
            <input
              type="email"
              placeholder="Email của bạn"
              className="mb-5 p-2 border border-gray-300 text-black"
            />
            <input
              type="text"
              placeholder="Số điện thoại của bạn"
              className="mb-5 p-2 border border-gray-300 text-black"
            />
            <textarea
              placeholder="Nội dung"
              className="mb-5 p-2 border border-gray-300 text-black h-24"
            />
            <button
              type="submit"
              className="p-2 bg-black text-white max-w-24"
            >
              Gửi
            </button>
          </form>
        </div>
        <div className="flex flex-col p-4 text-xl">
          <p className="text-xl text-logo-green">Công ty TNHH PHD</p>
          <div className="flex items-center space-x-5 py-2">
            <LocationOn fontSize="14px" />
            <a className="cursor-pointer">
              46 phố An Dương, phường Yên Phụ, quận Tây Hồ, Thành phố Hà Nội.
            </a>
          </div>
          <div className="flex items-center space-x-5 py-2">
            <PhoneInTalk fontSize="14px" />
            <a className="cursor-pointer">024 3856 3856</a>
          </div>
          <div className="flex items-center space-x-5 py-2">
            <p>MAIL:</p>
            <a className="cursor-pointer">cskh@freshgarden.vn</a>
          </div>
          <div className="flex items-center space-x-5 py-2">
            <LocalPostOfficeIcon fontSize="14px" />
            <a className="cursor-pointer">
              Mã số doanh nghiệp: 0103833363 Do Sở Kế hoạch - Đầu tư Hà Nội cấp
              ngày 14/05/2009.
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 flex justify-center items-center border-t border-gray-700 pt-4 text-white">
        <div className="flex flex-col sm:flex-row ">
          <a href="#" className="mr-4 hover:text-logo-green">
            Chính sách mua hàng, vận chuyển và đổi trả
          </a>
          <a href="#" className="mr-4 hover:text-logo-green">
            Chính sách an toàn thực phẩm
          </a>
          <a href="#" className="mr-4 hover:text-logo-green">
            Chính sách bảo mật
          </a>
          <a href="#" className="mr-4 hover:text-logo-green">
            Điều khoản dịch vụ
          </a>
          <a href="#" className="mr-4 hover:text-logo-green">Liên hệ</a>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 sm:mt-0">
        <p className="text-white p-2">Đăng ký nhận tin</p>
        <input
          type="email"
          placeholder="Nhập email của bạn"
          className="p-2 border border-gray-300 text-black mr-2"
        />
        <button className="p-2 px-8 bg-black text-white">
          Đăng Ký
        </button>
      </div>
      <div className="mt-4 text-center text-white">
        Copyright © 2024 Freshgarden.vn
      </div>
    </div>

  );
};

export default Footer;
