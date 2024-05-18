import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { MainProductData } from "./MainProductData";
import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { LocalGroceryStore } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Product = () => {
  const bestsellingProducts = MainProductData.filter(
    (product) => product.path === "1"
  );
  const newProducts = MainProductData.filter((product) => product.path === "2");
  const saleProducts = MainProductData.filter(
    (product) => product.path === "3"
  );
  const [products, setProducts] = useState(bestsellingProducts);
  const handleButtonClick = (path) => {
    if (path === "1") {
      setProducts(bestsellingProducts);
    } else if (path === "2") {
      setProducts(newProducts);
    } else if (path === "3") {
      setProducts(saleProducts);
    }
  };

  return (
    <section className="-home-tab-product py-12">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <div className="icon flex justify-center items-center">
            <img src="/assets/images/SP/IconSP.jpg" alt="" />
          </div>
          <span className="py-5 text-black align-text-center flex justify-center items-center text-5xl font-playfairDisplay">
            Sản phẩm
          </span>
          <div className="text-black text-base flex justify-center items-center font-sans">
            Chào mừng bạn đến với bộ sưu tập bánh Fresh Garden
          </div>
        </div>
        <div>
          <Button onClick={() => handleButtonClick("1")}>Bán chạy</Button>
          <Button onClick={() => handleButtonClick("2")}>Mới</Button>
          <Button onClick={() => handleButtonClick("3")}>Khuyến mãi</Button>
        </div>
        <div className="container mx-auto py-5 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MainProductData.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col justify-center items-center py-10 cursor-pointer group bg-white"
              >
                <div className="picture">
                  <img
                    className="object-cover w-full h-48 rounded-t-lg"
                    role="presentation"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="detail">
                  <span className="text-black text-center mt-2">
                    {item.name}
                  </span>
                  <div className="text-logo-green font-sans text-center mt-2">
                    {item.price}
                  </div>
                </div>
                <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    variant="contained"
                    className="w-12 h-12 bg-black flex justify-center items-center"
                  >
                    <LocalGroceryStore className="text-white" />
                  </button>
                  <button
                    variant="contained"
                    className="w-12 h-12 bg-black flex justify-center items-center"
                  >
                    <RemoveRedEyeIcon className="text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
