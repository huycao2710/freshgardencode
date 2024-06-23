  import React, { useMemo } from "react";
  import {
    Label,
    WrapperInfo,
    WrapperContainer,
    WrapperValue,
    WrapperItemOrder,
    WrapperCountOrder,
    WrapperItemOrderInfo,
  } from "../OrderSuccess/style";
  import { useDispatch, useSelector } from "react-redux";
  import { NavLink, useLocation, useNavigate } from "react-router-dom";
  import { orderContant } from "../../../contant";
  import { convertPrice } from "../../../util";
  import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
  import * as OrderAllService from "../../../services/OrderAllService";
  import { removeAllOrderProduct } from "../../../redux/slides/orderAllSlide";
  import { toast } from "react-toastify";
  const StripeSuccess = () => {
    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.user);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = location;
    const handleClick = async () => {
      navigate("/");
    };

    const priceMemo = useMemo(() => {
      const result = order?.orderItemsSelected?.reduce((total, cur) => {
        return total + cur.price * cur.amount;
      }, 0);
      return result;
    }, [order]);

    const priceDiscountMemo = useMemo(() => {
      const result = order?.orderItemsSelected?.reduce((total, cur) => {
        const totalDiscount = cur.discount ? cur.discount : 0;
        return total + (cur.price * cur.amount * totalDiscount) / 100;
      }, 0);
      if (Number(result)) {
        return result;
      }
      return 0;
    }, [order]);

    const deliveryPriceMemo = useMemo(() => {
      if (priceMemo >= 20000 && priceMemo < 500000) {
        return 30000;
      } else if (priceMemo >= 500000) {
        return 50000;
      } else {
        return 0;
      }
    }, [priceMemo]);

    const totalPriceMemo = useMemo(() => {
      return (
        Number(priceMemo) - Number(priceDiscountMemo) + Number(deliveryPriceMemo)
      );
    }, [priceMemo, priceDiscountMemo, deliveryPriceMemo]);
    console.log(order.orderItemsSelected);

    const handleConfirm = async () => {
      try {
        const { data } = await OrderAllService.createNewOrder({
          token: user.access_token,
          orderItems: order.orderItemsSelected,
          fullName: user.fullName,
          address: user.address,
          phone: user.phone,
          city: user.city,
          paymentMethod: 'stripe',
          itemsPrice: priceMemo,
          shippingPrice: deliveryPriceMemo,
          totalPrice: totalPriceMemo,
          user: user.id,
          email: user.email
        });

        console.log('Response from backend:', data); // Debug response từ backend
        const arrayOrdered = []
        order?.orderItemsSelected?.forEach(element => {
          arrayOrdered.push(element.product)
        });
        dispatch(removeAllOrderProduct({ listChecked: arrayOrdered }))
        navigate('/orderSuccess', {
          state: {
            delivery: '',
            payment: 'stripe',
            orders: order?.orderItemsSelected,
            totalPriceMemo: totalPriceMemo
          }
        })// Điều hướng đến trang thành công sau khi tạo đơn hàng
      } catch (error) {
        console.error("Error creating order:", error);
        toast.error('Đặt hàng không thành công! Vui lòng thử lại sau.');
      }
    };
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-vnpay-blue">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
            <div className="flex items-center mb-5">
              <NavLink to="/" className="flex items-center">
                {/* Add any logo or text here */}
              </NavLink>
              <span className="text-xl font-semibold text-red-500 border-l-2 border-vnpay-blue pl-5">
                Thanh Toán STRIPE
              </span>
            </div>
            <section>
              <div className="container mx-auto">
                <div className="py-5">
                  <div className="mb-3">
                    <h4 className="text-center">Thông tin thanh toán</h4>
                  </div>
                  <form>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Tổng tiền
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        value={totalPriceMemo}
                        readOnly
                      />
                    </div>
                    <button
                      type="button"
                      className="w-full bg-vnpay-blue text-white mt-5 py-2 px-4 rounded hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      onClick={handleConfirm}
                    >
                      Xác nhận
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  };

  export default StripeSuccess;
