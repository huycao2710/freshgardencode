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
  let navigate = useNavigate();
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
          
        }
      }
    };
    confirm();
  }, []);

  return (
    <>
      <div>123456</div>
    </>
  );
}

export default VnpayPaymentSuccess;
