import React from "react";
import HeaderComponent from "../../../components/global/HeaderComponent/HeaderComponent";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";
import MainProduct from "../../../components/global/MainProduct/MainProduct";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent/>
      </div>
      <div id="homeslider" className="h-screen">
        <MainCarousel/>
      </div>
      <section className="home-featured-product">
        <MainProduct/>
      </section>
    </div>
  );
};

export default HomePage;
