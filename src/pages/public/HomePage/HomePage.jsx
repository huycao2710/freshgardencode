import React, { useEffect, useState } from "react";
import MainCarousel from "../../../components/global/MainCarousel/MainCarousel";
import MainProduct from "../../../components/global/MainProduct/MainProduct";
import About from "../../../components/global/MainProduct/About";
import About2 from "../../../components/global/MainProduct/About2";
import Service from "../../../components/global/MainProduct/Service";
import Articles from "../../../components/global/MainProduct/Articles";
import ClientReview from "../../../components/global/MainProduct/ClientReview";

const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />
        <MainProduct />
        <About />
        <About2 />
        <Service />
        <Articles />
        <ClientReview />
      </div>
    </>

  );
};

export default HomePage;
