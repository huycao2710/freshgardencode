import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductSortDropdown from "./SortOption";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import { useQuery } from "@tanstack/react-query";
import * as ProductAllService from "../../../services/ProductAllService";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryText, setCategoryText] = useState("Tất cả sản phẩm");
  const [products, setProducts] = useState(null);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 12;

  const fetchProducts = async ({ queryKey }) => {
    const [_, selectedCategory, pageCurrent] = queryKey;
    if (selectedCategory) {
      const res = await ProductAllService.getProductsByCategory(
        selectedCategory,
        pageSize,
        pageCurrent - 1
      );
      //setTotalPages(Math.ceil(res.total / pageSize));
      
      //return res;
      const availableProducts = res.data.filter(product => product.available);
      setTotalPages(Math.ceil(availableProducts.length / pageSize));
      console.log("cate selected", res);
      return { ...res, data: availableProducts };
    } else {
      const res = await ProductAllService.getAllProduct(
        pageCurrent - 1,
        pageSize
      );
      //setTotalPages(Math.ceil(res.total / pageSize));
      //console.log("cate not selected", res);
      //return res;
      
      const availableProducts = res.data.filter(product => product.available);
      setTotalPages(Math.ceil(availableProducts.length / pageSize));
      console.log("cate not selected", res);
      return { ...res, data: availableProducts };
    }
  };

  const fetchCategories = async () => {
    const res = await ProductAllService.getAllCategory();
    return res.data;
  };

  const { isLoading: isLoadingProducts, data: productsData } = useQuery({
    queryKey: ["products", selectedCategory, pageCurrent, pageSize],
    queryFn: fetchProducts,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const { isLoading: isLoadingCategories, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCategoryText(category ? category : "Tất cả sản phẩm");
    setPageCurrent(1);
  };

  const sortProducts = (type) => {
    const sortedProducts = [...productsData.data];
    if (type === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    setProducts({ data: sortedProducts });
  };

  const handlePaginationChange = (event, value) => {
    setPageCurrent(value);
  };
  return (
    <div className="bg-white font-playfairDisplay">
      <div>
        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <section className="pb-24 pt-6 flex justify-center items-center">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="container px-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div className="">
                  <div
                    className=" pt-10 pb-5 flex justify-between items-center cursor-pointer"
                    onClick={() => handleCategoryChange(null)}
                  >
                    <h1 className="text-3xl font-bold">Danh Mục</h1>
                  </div>
                  <hr className="pb h-1 mt-5 mb-4 bg-logo-green" />
                  <form className="lg:block">
                    {isLoadingCategories ? (
                      <div>Loading categories...</div>
                    ) : (
                      categories?.map((category) => (
                        <div className="py-2 flex justify-between items-center ">
                          <span
                            className="text-md font-bold cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCategoryChange(category);
                            }}
                          >
                            {category}
                          </span>
                          <KeyboardArrowDownIcon className="opacity-50 font-bold cursor-pointer" />
                        </div>
                      ))
                    )}
                  </form>
                </div>
                {/* Product grid */}
                <div className="lg:col-span-3 w-full relative">
                  <div className="flex justify-between items-center mb-5">
                    <h1 className="text-3xl font-bold">{categoryText}</h1>
                    <ProductSortDropdown sortProducts={sortProducts} />
                  </div>
                  {isLoadingProducts ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {productsData?.data?.map((product) => (
                        <ProductCard
                          key={product._id}
                          countInStock={product.countInStock}
                          description={product.description}
                          imageProduct={product.imageProduct}
                          nameProduct={product.nameProduct}
                          price={product.price}
                          rating={product.rating}
                          type={product.type}
                          selled={product.selled}
                          discount={product.discount}
                          idProduct={product._id}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px=[3.6rem]">
            <div className="px-4 py-5 flex justify-center">
              <Pagination
                color="secondary"
                count={totalPages}
                page={pageCurrent}
                onChange={handlePaginationChange}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
