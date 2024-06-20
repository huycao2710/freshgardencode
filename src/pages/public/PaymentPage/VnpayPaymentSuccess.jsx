import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as OrderAllService from "../../../services/OrderAllService";
import { useDispatch, useSelector } from "react-redux";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import { removeAllOrderProduct } from "../../../redux/slides/orderAllSlide";
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function VnpayPaymentSuccess(props) {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  let query = useQuery();
  const [paymentInfo, setPaymentInfo] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const priceMemo = useMemo(() => {
    const result = order?.orderItemsSelected?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    return result;
  }, [order]);

  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemsSelected?.reduce((total, cur) => {
      const totalDiscount = cur.discount ? cur.discount : 0;
      return total + ((cur.price * cur.amount) * totalDiscount) / 100;
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy thông tin từ query params
        const objectParam = {
          vnp_Amount: query.get("vnp_Amount"),
          vnp_BankCode: query.get("vnp_BankCode"),
          vnp_CardType: query.get("vnp_CardType"),
          vnp_OrderInfo: query.get("vnp_OrderInfo"),
          vnp_PayDate: query.get("vnp_PayDate"),
        };
        
        // Cập nhật state để hiển thị thông tin thanh toán
        setPaymentInfo(objectParam);
      } catch (error) {
        console.error("Error fetching payment info:", error);
      }
    };
    fetchData();
  }, [query]);

  const labels = {
    vnp_Amount: "Tổng tiền",
    vnp_BankCode: "Ngân hàng",
    vnp_CardType: "Loại thẻ",
    vnp_OrderInfo: "Thông tin đơn hàng",
    vnp_PayDate: "Ngày thanh toán",
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${day}/${month}/${year}`;
  };
  
  const handleConfirm = async () => {
    try {
      const { data } = await OrderAllService.createNewOrder({
        token: user.access_token,
        orderItems: order.orderItemsSelected,
        fullName: user.fullName,
        address: user.address,
        phone: user.phone,
        city: user.city,
        paymentMethod: 'vnpay',
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
            delivery:'',
            payment:'vnpay',
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className="flex items-center mb-5">
            <NavLink to="/" className="flex items-center">
              {/* Add any logo or text here */}
            </NavLink>
            <span className="text-xl font-semibold text-green-600 border-l-2 border-green-600 pl-5">
              Thanh Toán VNPAY
            </span>
          </div>
          <section>
            <div className="container mx-auto">
              <div className="py-5">
                <div className="mb-3">
                  <h4 className="text-center">Thông tin thanh toán</h4>
                </div>
                <form>
                  {Object.entries(paymentInfo).map(([key, value]) => (
                    <div className="mb-4" key={key}>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>
                        {labels[key] || key}:
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id={key}
                        type="text"
                        value={key === 'vnp_PayDate' ? formatDate(value) : value || ''}
                        readOnly
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleConfirm}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                  >
                    Xác nhận
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-24 bg-gray-100"></div>
    </>
  );
}

export default VnpayPaymentSuccess;
