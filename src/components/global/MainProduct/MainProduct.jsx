import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { LocalGroceryStore } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import * as ProductAllService from "../../../services/ProductAllService";
import { useQuery } from "@tanstack/react-query";
import { convertPrice } from '../../../util';
import ProductCard from "../../../pages/public/ProductsPage/ProductCard";

const MainProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const fetchFeaturedProduct = async () => {
    const res = await ProductAllService.getFeaturedProducts();
    return res;
  };

  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchFeaturedProduct,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const items = products?.data?.map((product) => {
    return (
      <div
        key={product._id}
        className="flex flex-col justify-center items-center py-5 cursor-pointer group"
      >
        <img
          className="object-cover"
          role="presentation"
          src={product.imageProduct}
          alt=""
        />
        <span className="text-white text-center mt-2">
          {product.nameProduct}
        </span>
        <span className="text-logo-green font-sans text-center mt-2">
          {convertPrice(product.price)}
        </span>
        <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button variant="contained" className="w-12 h-12 bg-black">
            <LocalGroceryStore className="text-white" />
          </button>
          <button variant="contained" className="w-12 h-12 bg-black">
            <RemoveRedEyeIcon className="text-white" />
          </button>
        </div>
      </div>
    );
  });

  const handleSlideChanged = (event) => {
      setActiveIndex(event.item);
  };

  const slidePrev = () => {
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    if(activeIndex < items.length - 4){
      carouselRef.current.slideNext();
    }
    
  };

  return (
    <section
      className="home-featured-product py-12"
      style={{ backgroundImage: "url(/assets/images/Header/nenHeader.jpg)" }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <div className="icon flex justify-center items-center">
            <img src="/assets/images/SPNB/IconNB.jpg" alt="" />
          </div>
          <span className="py-5 text-white align-text-center flex justify-center items-center text-5xl font-playfairDisplay">
            Sản phẩm nổi bật
          </span>
          <div className="text-white text-base flex justify-center items-center font-sans">
            Cập nhật về những sản phẩm nổi bật nhất từ Fresh Garden
          </div>
        </div>

        <div className="container relative py-5 px-10">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <AliceCarousel
            items={products?.data?.map((product) => (
              <div key={product._id} className="text-white">
                <ProductCard
                  countInStock={product.countInStock}
                  description={product.description}
                  imageProduct={product.imageProduct}
                  nameProduct={product.nameProduct}
                  price={product.price}
                  rating={product.rating}
                  type={product.type}
                  selled={product.selled}
                  discount={product.discount}
                  id={product._id}
                />
              </div>
            ))}
              className="w-full h-full"
              responsive={responsive}
              disableDotsControls
              disableButtonsControls
              onSlideChanged={handleSlideChanged}
              activeIndex={activeIndex}
              ref={carouselRef}
            />
          )}
          <Button
            className="z-50 text-white bg-banner-black absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer flex justify-center items-center"
            shape="circle"
            icon={<LeftOutlined />}
            size="large"
            onClick={slidePrev}
          ></Button>
          <Button
            className="z-50 text-white bg-banner-black absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            shape="circle"
            icon={<RightOutlined />}
            size="large"
            onClick={slideNext}
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default MainProduct;