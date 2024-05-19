import React from "react";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";
import MainProduct from "../../../components/global/MainProduct/MainProduct";
import Product from "../../../components/global/MainProduct/Product";
import About from "../../../components/global/MainProduct/About";
import About2 from "../../../components/global/MainProduct/About2";
import Service from "../../../components/global/MainProduct/Service";
import Articles from "../../../components/global/MainProduct/Articles";
import ClientReview from "../../../components/global/MainProduct/ClientReview";

const HomePage = () => {

  return (
    <div>
<<<<<<< HEAD
      <div id="homeslider" className="h-screen">
        <MainCarousel />
      </div>
      <section className="home-featured-product py-12" style={{ backgroundImage: 'url(/assets/images/Header/nenHeader.jpg)' }}>
        <MainProduct />
      </section>
      <section className="-home-tab-product py-12" >
        <Product />
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
=======
      <HeaderComponent />
      <MainCarousel />
      <MainProduct />
      <Product />
      <About />
      <About2 />
      <Service />
      <Articles/>
      <ClientReview />
>>>>>>> d3c22de1a9ab93cca9a7c8caace7b602f807067d
    </div>
  );
};

export default HomePage;
