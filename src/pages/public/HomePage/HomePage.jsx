import React from "react";
import HeaderComponent from "../../../components/global/HeaderComponent/HeaderComponent";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";
import MainProduct from "../../../components/global/MainProduct/MainProduct";
import Product from "../../../components/global/MainProduct/Product";
import About from "../../../components/global/MainProduct/About";
import About2 from "../../../components/global/MainProduct/About2";
import { Article } from "@mui/icons-material";
import Service from "../../../components/global/MainProduct/Service";

const HomePage = () => {
  return (
    <div>
      <HeaderComponent />
      <MainCarousel />
      <MainProduct />
      <Product />
      <About />
      <About2 />
      <Service />
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
