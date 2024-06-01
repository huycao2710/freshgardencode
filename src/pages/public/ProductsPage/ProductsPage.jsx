import React, { useState } from "react";
import ProductCard from "./ProductCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import { useQuery } from "@tanstack/react-query";
import * as ProductAllService from "../../../services/ProductAllService";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const fetchProducts = async () => {
    if (selectedCategory) {
      const res = await ProductAllService.getProductsByCategory(
        selectedCategory
      );
      return res;
    } else {
      const res = await ProductAllService.getAllProduct();
      return res;
    }
  };

  const fetchCategories = async () => {
    const res = await ProductAllService.getAllCategory();
    return res;
  };

  const { isLoading, data: products } = useQuery({
    queryKey: ["products",selectedCategory],
    queryFn: fetchProducts,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const { isLoadingCategories, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="bg-white">
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
                  <div className=" pt-10 pb-5 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Danh mục</h1>
                  </div>
                  <hr className="pb-1 h-1 mt-5 mb-4 dark:bg-logo-green" />
                  <form className="lg:block">
                    {isLoadingCategories ? (
                      <div>Loading categories...</div>
                    ) : (
                      categories?.data?.map((category) => (
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
                <div className="lg:col-span-3 w-full pt-28">
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {products?.data?.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px=[3.6rem]">
            <div className="px-4 py-5 flex justify-center">
              <Pagination color="secondary" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
