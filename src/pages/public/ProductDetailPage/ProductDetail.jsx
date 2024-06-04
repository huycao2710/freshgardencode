// Trong trang chi tiết sản phẩm:
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductDetailsComponent from "./ProductDetailsComponent";
import { useParams } from "react-router-dom";
import * as ProductAllService from "../../../services/ProductAllService";
import ProductCard from "../ProductsPage/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchRelatedProducts = async () => {
    try {
      // Lấy thông tin của sản phẩm đang xem
      const productDetailsRes = await ProductAllService.getDetailsInfoProduct(
        id
      );
      const productDetails = productDetailsRes.data;

      // Kiểm tra nếu có sản phẩm và danh mục của sản phẩm
      if (productDetails && productDetails.categoryName) {
        // Lấy các sản phẩm từ cùng một danh mục (loại bỏ sản phẩm hiện tại)
        const relatedProductsRes =
          await ProductAllService.getProductsByCategory(
            productDetails.categoryName,
            id
          );
        setRelatedProducts(
          relatedProductsRes.data.filter((product) => product._id !== id)
        );
      }
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  useEffect(() => {
    fetchRelatedProducts();
  }, [id]);

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <ProductDetailsComponent idProduct={id} />
        <section className="pt-10">
          <h1 className="py-5 text-3xl font-bold">Sản phẩm liên quan</h1>
          <div className="py-5">
            <AliceCarousel
              items={relatedProducts.map((product) => (
                <div key={product._id}>
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
              responsive={{
                0: { items: 1 },
                568: { items: 2 },
                1024: { items: 3 },
              }}
              disableButtonsControls
              autoPlay
              autoPlayInterval={3000}
              infinite
            />
          </div>
        </section>
      </div>
    </div>
  );
}
