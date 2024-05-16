import React from "react";
import HeaderComponent from "../../../components/global/HeaderComponent/HeaderComponent";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent/>
      </div>
      <div>
        <MainCarousel/>
      </div>
    </div>
  );
};

export default HomePage;
