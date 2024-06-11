import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { confirmOrderVnpay } from "../../../services/PaymentService";
import { toast } from "react-toastify";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function VnpayPaymentSuccess(props) {
  let query = useQuery();
  useEffect(() => {
    let objectParam = {
      vnp_Amount: query.get("vnp_Amount"),
      vnp_BankCode: query.get("vnp_BankCode"),
      vnp_BankTranNo: query.get("vnp_BankTranNo"),
      vnp_CardType: query.get("vnp_CardType"),
      vnp_OrderInfo: query.get("vnp_OrderInfo"),
      vnp_PayDate: query.get("vnp_PayDate"),
      vnp_ResponseCode: query.get("vnp_ResponseCode"),
      vnp_TmnCode: query.get("vnp_TmnCode"),
      vnp_TransactionNo: query.get("vnp_TransactionNo"),
      vnp_TransactionStatus: query.get("vnp_TransactionStatus"),
      vnp_TxnRef: query.get("vnp_TxnRef"),
      vnp_SecureHash: query.get("vnp_SecureHash"),
    };
    let confirm = async () => {
      let orderData = JSON.parse(localStorage.getItem("orderData"));
      localStorage.removeItem("orderData");

      if (orderData) {
        let res = await confirmOrderVnpay(objectParam);
        if (res && res.errCode == 0) {
          toast.success("Thanh toán hóa đơn thành công");
         
        }
      }
    };
    confirm();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="bg-white flex items-center h-24 mb-5 px-32">
          <NavLink to="/" className="flex items-center">
          </NavLink>
          <span className="text-xl font-semibold text-green-600 border-l-2 border-green-600 pl-5">
            Thanh Toán VNPAY
          </span>
        </div>

        <div className="bg-white mx-32 p-5 border border-gray-300">
          <section>
            <div className="container mx-auto">
              <div className="py-5">
                <div className="mb-3">
                  <h4 className="text-right">Thông tin thanh toán</h4>
                </div>
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
