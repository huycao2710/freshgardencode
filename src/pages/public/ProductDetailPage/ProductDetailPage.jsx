import React, { useState } from "react";
import { Label, RadioGroup } from "@headlessui/react";
import { Box, Button, Grid, LinearProgress, Rating, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import RelatedProduct from "./RelatedProduct";
import * as ProductAllService from "../../../services/ProductAllService";
import { useQuery } from "@tanstack/react-query";
import AliceCarousel from "react-alice-carousel";

export default function ProductDetails() {
    const fetchDetailsInfoProduct = async () => {
        const res = await ProductAllService.getDetailsInfoProduct();
        return res;
    };

    const { isLoadingDetailsInfoProduct, data: productData } = useQuery({
        queryKey: ["product"],
        queryFn: fetchDetailsInfoProduct,
        retry: 3,
        retryDelay: 1000,
        keepPreviousData: true,
    });

    const detail = productData?.data || {};

    const category = detail.categoryName || "";

    const fetchProductsByCategory = async (category) => {
        const res = await ProductAllService.getProductsByCategory(category);
        return res;
    };

    const { isLoadingRelatedProducts, data: relatedProductsData } = useQuery({
        queryKey: ["relatedProducts", category],
        queryFn: () => fetchProductsByCategory(category),
        enabled: !!category,
    });
    const relatedProducts = relatedProductsData?.data || [];

    console.log(detail);

    const [selectedSize, setSelectedSize] = useState('');

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <div className="bg-white lg:px-20">
            {isLoadingDetailsInfoProduct ? (
                <div>Loading...</div>
            ) : (
                <>

                    <div className="pt-6">
                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb">
                            <ol
                                role="list"
                                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                            >
                                <li className="text-sm">
                                    <a
                                        href=""
                                        aria-current="page"
                                        className="font-medium text-gray-500 hover:text-gray-600"
                                    >
                                        {detail.name || "Tên sản phẩm"}
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
                            {/* Image gallery */}
                            <div className="flex flex-col items-center">
                                <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                                    <img
                                        src={detail.imageProduct || ""}
                                        alt=""
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="flex flex-wrap space-x-5 justify-center">
                                    image
                                </div>
                            </div>
                            {/* Product info */}
                            <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24">
                                <div className="lg:col-span-2 pb-5 ">
                                    <h1 className="text-3xl lg:text-x1 font-semibold text-gray-900">
                                        {detail.categoryName || "Tên sản phẩm"}
                                    </h1>
                                </div>
                                <div className="lg:col-span-2 pb-5">
                                    <h1 className="text-lg lg:text-x1 text-gray-900">
                                        {detail.nameProduct || "Tên sản phẩm"}
                                    </h1>
                                </div>

                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <p className="text-3xl tracking-tight text-logo-green">
                                        {detail.price || "đ"}
                                    </p>

                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <div className="flex items-center space-x-3">
                                            <Rating name="read-only" value={4.5} readOnly />
                                            <p className="opacity-50 text-sm">6 ratings</p>
                                            <p className="opacity-50 text-sm ml-3 font-medium text text-indigo-600 hover:text-indigo-600">
                                                9 reviews
                                            </p>
                                        </div>
                                    </div>

                                    <form className="mt-10">
                                        {/* Sizes */}
                                        <div className="mt-10">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                    Kích Thước
                                                </h3>
                                            </div>


                                        </div>

                                        <FormControl fullWidth sx={{ mt: 3, mb: 5 }}>
                                            <InputLabel id="size-select-label">Size</InputLabel>
                                            <Select
                                                labelId="size-select-label"
                                                id="size-select"
                                                value={selectedSize}
                                                label="Size"
                                                onChange={handleSizeChange}
                                            >
                                                <MenuItem value={10}>Size 10</MenuItem>
                                                <MenuItem value={20}>Size 20</MenuItem>
                                                <MenuItem value={30}>Size 30</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button
                                            variant="contained"
                                            sx={{ p: "2rem", py: "1rem", bgcolor: "#B9D431" }}
                                        >
                                            Thêm vào giỏ hàng
                                        </Button>
                                    </form>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>
                                        <div className="space-y-6">Thông tin sản phẩm</div>
                                    </div>

                                    <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">
                                            Hướng dẫn mua hàng online
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* các sản phẩm tương tự */}
                        <section className="pt-10">
                            <h1 className="py-5 text-3xl font-bold">Sản phẩm liên quan</h1>
                            <div className="flex justify-center"> {/* Căn giữa container của Alice Carousel */}
                                {isLoadingRelatedProducts ? (
                                    <div>Loading...</div>
                                ) : (
                                    <AliceCarousel
                                        responsive={responsive}
                                        disableButtonsControls={true}
                                        mouseTracking
                                        items={relatedProducts.map((product) => (
                                            <RelatedProduct key={product.id} product={product} />
                                        ))}
                                    />
                                )}
                            </div>
                        </section>
                    </div>
                </>
            )}
        </div>
    );
}