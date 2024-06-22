import React from "react";
import {
  Label,
  WrapperInfo,
  WrapperContainer,
  WrapperValue,
  WrapperItemOrder,
  WrapperCountOrder,
  WrapperItemOrderInfo,
} from "./style";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { orderContant } from "../../../contant";
import { convertPrice } from "../../../util";
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
const OrderSuccess = () => {
  const order = useSelector((state) => state.order);
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const handleClick = async () => {
    navigate("/")
  }
  return (
    <div className="w-full h-full">
      <Loading isPending={false}>
        <div className="h-full w-full max-w-screen-lg mx-auto pt-2">
          <h3 className="flex justify-center font-bold text-2xl py-4">Đặt hàng thành công</h3>
          <div className="flex justify-center">
            <div className="w-full h-full bg-white  p-4">
              <div class="lg:col-span-2">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-2 mb-4">
                    <div className="mb-2">
                      <span className="block text-lg font-semibold">
                        Phương thức giao hàng
                      </span>
                      <div className="bg-logo-green border border-blue-200 p-2 rounded mt-1">
                        <span className="text-orange-500 font-bold">
                          {orderContant.delivery[state?.delivery]}
                        </span>{" "}
                        Giao hàng tiết kiệm
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 mb-4">
                    <div className="mb-2">
                      <span className="block text-lg font-semibold">
                        Phương thức thanh toán
                      </span>
                      <div className="bg-logo-green border border-blue-200 p-2 rounded mt-1">
                        {orderContant.payment[state?.payment]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded p-4 py-6">
                {state.orders?.map((order) => (
                  <div
                    key={order?.nameProduct}
                    className="flex items-center p-4 bg-white rounded shadow mb-8 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-logo-green"
                  >
                    <div className="flex items-center w-1/4 gap-4">
                      <img
                        src={order?.imageProduct}
                        alt={order?.nameProduct}
                        className="w-20 h-full object-cover"
                      />
                    </div>
                    <div className="w-1/4 overflow-hidden text-ellipsis whitespace-nowrap">
                      {order?.nameProduct}
                    </div>
                    <div className="w-1/4 flex items-center text-sm text-gray-800">
                      <p className="font-semibold mr-2">Giá tiền:</p>
                      {convertPrice(order?.price)}
                    </div>
                    <div className="w-1/4 flex items-center text-sm text-gray-800">
                      <p className="font-semibold mr-2">Số lượng:</p>
                      {order?.amount}
                    </div>
                  </div>
                ))}
                <div className="flex justify-center text-2xl text-red-600 py-4">
                  <h1 className="px-2 font-bold">Tổng tiền:</h1>
                  {convertPrice(state?.totalPriceMemo)}
                </div>
                <div className="flex justify-center font-semibold text-xl">
                  <button
                    onClick={handleClick}
                    className=" bg-logo-green text-black mt-5 py-2 px-4 rounded transform transition-transform duration-200 hover:scale-150 focus:shadow-outline">
                    Mua hàng tiếp nha :3
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Loading>
    </div>
  );
};

export default OrderSuccess;
