import React from "react";
import HeaderComponent from "../../../components/global/HeaderComponent/HeaderComponent";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";
import MainProduct from "../../../components/global/MainProduct/MainProduct";
import Product from "../../../components/global/MainProduct/Product";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderComponent/>
      </div>
      <div id="homeslider" className="h-screen">
        <MainCarousel/>
      </div>
      <section className="home-featured-product py-12" style={{backgroundImage:'url(/assets/images/Header/nenHeader.jpg)'}}>
        <MainProduct/>
      </section>
      <section className="-home-tab-product py-12" >
        <Product/>
      </section>
      <section>
        <div>About</div>
      </section>
      <section>
        <div>About2</div>
      </section>
      <section>
        <div>articles</div>
      </section>
      <section>
        <div>client</div>
      </section>
      <section>
        <div>brand</div>
      </section>
    </div>
  );
};

export default HomePage;
