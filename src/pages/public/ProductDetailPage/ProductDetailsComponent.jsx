import { Col, Image, Rate, Row } from "antd";
import React, { useEffect, useState } from "react";
import {
  WrapperAddressProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQuantityProduct,
  WrapperStyleNameProduct,
} from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import * as ProductAllService from "../../../services/ProductAllService";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addOrderProduct,
  resetOrder,
} from "../../../redux/slides/orderAllSlide";
import { convertPrice } from "../../../util";
import * as message from "../../../components/global/MessageComponent/Message";
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
import ButtonComp from "../../../components/global/ButtonComponent/ButtonComp";

const ProductDetailComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [errorLimitOrder, setErrorLimitOrder] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onChange = (value) => {
    setNumProduct(Number(value));
  };

  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    if (id) {
      const res = await ProductAllService.getDetailsInfoProduct(id);
      return res.data;
    }
  };

  const { isPending, data: productDetails } = useQuery({
    queryKey: ["product-details", idProduct],
    queryFn: fetchGetDetailsProduct,
    enabled: !!idProduct,
  });

  useEffect(() => {
    if (productDetails) {
      const orderRedux = order?.orderItems?.find(
        (item) => item.product === productDetails._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInStock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        setErrorLimitOrder(false);
      } else if (productDetails?.countInStock === 0) {
        setErrorLimitOrder(true);
      }
    }
  }, [numProduct, productDetails, order]);

  useEffect(() => {
    if (order.isSuccessOrder) {
      message.success("Sản phẩm đã thêm vào giỏ hàng");
    }
    return () => {
      dispatch(resetOrder());
    };
  }, [order.isSuccessOrder, dispatch]);

  const handleChangeCount = (type) => {
    if (type === "increase") {
      if (numProduct < productDetails?.countInStock) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (numProduct > 1) {
        setNumProduct(numProduct - 1);
      }
    }
  };

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
    } else {
      const orderRedux = order.orderItems?.find(
        (item) => item.product === productDetails?._id
      );
      if (
        orderRedux?.amount + numProduct <= orderRedux?.countInStock ||
        (!orderRedux && productDetails?.countInStock > 0)
      ) {
        dispatch(
          addOrderProduct({
            orderItem: {
              nameProduct: productDetails?.nameProduct,
              amount: numProduct,
              imageProduct: productDetails?.imageProduct,
              price: productDetails?.price,
              product: productDetails?._id,
              discount: productDetails?.discount,
              countInStock: productDetails?.countInStock,
            },
          })
        );
      } else {
        setErrorLimitOrder(true);
      }
    }
  };

  if (!productDetails) {
    return null; // Or some fallback UI
  }

  return (
    <Loading isPending={isPending}>
      <div className="lg:px-20">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li className="text-sm">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {productDetails?.nameProduct || "Tên sản phẩm"}
                </a>
              </li>
            </ol>
          </nav>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <Image
                  src={productDetails?.imageProduct}
                  alt="image product"
                  preview={false}
                />
              </div>
            </div>
            <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7x1 lg:px-8 lg:pb-24">
              <div className="lg:col-span-2 pb-5">
                <h1 className="text-3xl lg:text-xl font-semibold text-gray-900">
                  {productDetails?.categoryName || "Tên sản phẩm"}
                </h1>
              </div>
              <div className="lg:col-span-2 pb-5">
                <WrapperStyleNameProduct>
                  {productDetails?.nameProduct}
                </WrapperStyleNameProduct>
              </div>
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <WrapperPriceProduct>
                  <WrapperPriceTextProduct>
                    {convertPrice(productDetails?.price)}
                  </WrapperPriceTextProduct>
                </WrapperPriceProduct>

                <WrapperAddressProduct>
                  <span>Giao tới </span>
                  <span className="address">{user?.address}</span> -
                  <span className="change-address"> Đổi địa chỉ</span>
                </WrapperAddressProduct>

                <div
                  style={{
                    margin: "10px 0 20px",
                    padding: "10px 0",
                    borderTop: "1px solid #e5e5e5",
                    borderBottom: "1px solid #e5e5e5",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>Số lượng</div>
                  <WrapperQuantityProduct>
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => handleChangeCount("decrease")}
                      disabled={numProduct === 1}
                    >
                      <MinusOutlined
                        style={{ color: "#000", fontSize: "15px" }}
                      />
                    </button>
                    <WrapperInputNumber
                      onChange={onChange}
                      value={numProduct}
                      size="small"
                      min={1}
                      max={productDetails?.countInStock}
                    />
                    <button
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => handleChangeCount("increase")}
                      disabled={numProduct === productDetails?.countInStock}
                    >
                      <PlusOutlined
                        style={{ color: "#000", fontSize: "15px" }}
                      />
                    </button>
                  </WrapperQuantityProduct>
                </div>

                <div className="mt-6">
                  <div className="flex items-center space-x-3">
                    <Rate
                      allowHalf
                      defaultValue={productDetails?.rating}
                      value={productDetails?.rating}
                      readOnly
                    />
                    <p className="opacity-50 text-sm">6 ratings</p>
                    <p className="opacity-50 text-sm ml-3 font-medium text-indigo-600 hover:text-indigo-600">
                      9 reviews
                    </p>
                  </div>
                </div>

                <form className="mt-10">
                  <ButtonComp
                    size={40}
                    styleButton={{
                      background: "#b1c23c",
                      height: "48px",
                      width: "220px",
                      border: "none",
                      borderRadius: "4px",
                    }}
                    onClick={handleAddOrderProduct}
                    textbutton={"Đặt hàng"}
                    styleTextButton={{
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  />
                </form>
              </div>
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
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
        </div>
      </div>
    </Loading>
  );
};

export default ProductDetailComponent;