import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";

import { paymentOrderVnpay } from "../../../services/PaymentService";

import { toast } from "react-toastify";

function VnpayPaymentPage(props) {
  const location = useLocation();
  const [inputValues, setInputValues] = useState({
    orderType: "billpayment",
    orderDescription: "",
    bankCode: "",
    language: "vn",
    amount: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name == "amount") {
      return;
    }
    setInputValues({ ...inputValues, [name]: value });
  };
  useEffect(() => {
    if (location && location.state.totalPriceMemo) {
      setInputValues({ ...inputValues, ['amount']: location.state.totalPriceMemo });
    }
  }, [location]);
  console.log(inputValues)
  let handleOnclick = async () => {
    let res = await paymentOrderVnpay({
        orderType: inputValues.orderType,
        orderDescription: inputValues.orderDescription,
        bankCode: inputValues.bankCode,
        language: inputValues.language,
        amount: inputValues.amount,
    });
    if (res) {
        localStorage.setItem("orderData", JSON.stringify(location.state.totalPriceMemo));
      window.location.href = res.link;
    }else {
        toast.error("Payment failed!");
      }
  };
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between bg-white py-4 px-8 mb-8">
            <NavLink to="/" className="navbar-brand logo_h">
              <img src="/resources/img/logo.png" alt="" />
            </NavLink>
            <span className="text-green-500 text-lg">Thanh Toán VNPAY</span>
          </div>

          <div className="bg-white border border-gray-300 rounded-md px-8 py-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-right">Thông tin thanh toán</h4>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Loại hàng hóa
              </label>
              <select
                value={inputValues.orderType}
                onChange={(event) => handleOnChange(event)}
                name="orderType"
                className="form-select w-full"
              >
                <option value="billpayment">Thanh toán hóa đơn</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Số tiền
              </label>
              <input
                name="amount"
                disabled={true}
                value={inputValues.amount}
                onChange={(event) => handleOnChange(event)}
                type="text"
                className="form-input w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nội dung thanh toán
              </label>
              <input
                value={inputValues.orderDescription}
                onChange={(event) => handleOnChange(event)}
                name="orderDescription"
                type="text"
                className="form-input w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ngân hàng
              </label>
              <select
                value={inputValues.bankCode}
                onChange={(event) => handleOnChange(event)}
                name="bankCode"
                className="form-select w-full"
              >
                <option value=""> Không chọn </option>
                <option value="VNPAYQR"> Ngân hàng VNPAYQR</option>
                <option value="NCB"> Ngân hàng NCB</option>
                <option value="SCB"> Ngân hàng SCB</option>
                <option value="SACOMBANK"> Ngân hàng SACOMBANK</option>
                <option value="EXIMBANK"> Ngân hàng EXIMBANK</option>
                <option value="MSBANK"> Ngân hàng MSBANK</option>
                <option value="NAMABANK"> Ngân hàng NAMABANK</option>
                <option value="VISA"> Ngân hàng VISA</option>
                <option value="VNMART"> Ngân hàng VNMART</option>
                <option value="VIETINBANK"> Ngân hàng VIETINBANK</option>
                <option value="VIETCOMBANK"> Ngân hàng VIETCOMBANK</option>
                <option value="HDBANK"> Ngân hàng HDBANK</option>
                <option value="DONGABANK"> Ngân hàng Dong A</option>
                <option value="TPBANK"> Ngân hàng Tp Bank</option>
                <option value="OJB"> Ngân hàng OceanBank</option>
                <option value="BIDV"> Ngân hàng BIDV</option>
                <option value="TECHCOMBANK"> Ngân hàng Techcombank</option>
                <option value="VPBANK"> Ngân hàng VPBank</option>
                <option value="AGRIBANK"> Ngân hàng AGRIBANK</option>
                <option value="MBBANK"> Ngân hàng MBBank</option>
                <option value="ACB"> Ngân hàng ACB</option>
                <option value="OCB"> Ngân hàng OCB</option>
                <option value="SHB"> Ngân hàng SHB</option>
                <option value="IVB"> Ngân hàng IVB</option>
                {/* Thêm các tùy chọn cho ngân hàng tại đây */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Ngôn ngữ
              </label>
              <select
                value={inputValues.language}
                onChange={(event) => handleOnChange(event)}
                name="language"
                className="form-select w-full"
              >
                <option value="vn">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="mt-6">
              <button
                onClick={() => handleOnclick()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "100px", backgroundColor: "#f5f5f5" }}
      ></div>
    </>
  );
}

export default VnpayPaymentPage;
