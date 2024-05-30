import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/state/product/Action";
import { getCategories } from "../../../redux/state/category/Action";
import Pagination from "@mui/material/Pagination";

export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const { products, categories  } = useSelector((store) => store);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParamms = new URLSearchParams(decodedQueryString);
  const sizeValue = searchParamms.get("size");
  const priceValue = searchParamms.get("price");
  const discount = searchParamms.get("discount");
  const sortValue = searchParamms.get("sort");
  const pageNumber = searchParamms.get("page") || 1;
  const stock = searchParamms.get("stock");

  const handlePaginationChange = (event, value) => {
    const searchParamms = new URLSearchParams(location.search);
    searchParamms.set("page", value);
    const query = searchParamms.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log("category", categories);
  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 100000000] : priceValue.split("-").map(Number);

    const data = {
      category: param.levelThree,
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber - 1,
      pageSize: 10,
      stock: stock,
    };
    dispatch(getAllProducts(data));
  }, [
    param.levelThree,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  const handleFilterByCategory = (category) => {
    // Cập nhật URL để thêm category vào query string
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", category);
    navigate(`?${searchParams.toString()}`);
  };
  
  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1"></div>
                  </MenuItems>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}

              <div className="">
                <div className=" py-10 flex justify-between items-center">
                  <h1 className="text-lg opacity-50 font-bold">Filters</h1>
                  <KeyboardArrowDownIcon className="opacity-50 font-bold" />
                </div>
                <form className="hidden lg:block">
                  
                </form>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5">
                  {products &&
                    products.products?.content?.map((item) => (
                      <ProductCard key={item.id} product={item} />
                    ))}
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px=[3.6rem]">
            <div className="px-4 py-5 flex justify-center">
              <Pagination
                count={products.products?.totalPages}
                color="secondary"
                onChange={handlePaginationChange}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
