import React from "react";
import {
  LocationOn,
  PhoneInTalk,
} from "@mui/icons-material";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
const Footer = () => {
  return (
    <div
      className=""
      style={{ backgroundImage: 'url("assets/images/Header/nenHeader.jpg")' }}
    >
      <div className="grid grid-cols-2 text-white font-montserrat">
        <div className="flex flex-col items-center p-4 rounded-lg">
          <p className="text-xl text-center ">
            Có tư duy tiên phong và bản lĩnh, ​kinh nghiệm kinh doanh
          </p>
        </div>
        <div className="flex flex-col p-4 rounded-lg text-xl">
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
            <a className="cursor-pointer">Mã số doanh nghiệp: 0103833363 Do Sở Kế hoạch - Đầu tư Hà Nội cấp ngày 14/05/2009.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;