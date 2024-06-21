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
  console.log(location.state);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name == "amount") {
      return;
    }
    setInputValues({ ...inputValues, [name]: value });
  };
  useEffect(() => {
    if (location && location.state.totalPriceMemo) {
      setInputValues({
        ...inputValues,
        ["amount"]: location.state.totalPriceMemo,
      });
    }
  }, [location]);
  let handleOnclick = async () => {
    let res = await paymentOrderVnpay({
      orderType: inputValues.orderType,
      orderDescription: inputValues.orderDescription,
      bankCode: inputValues.bankCode,
      language: inputValues.language,
      amount: inputValues.amount,
    });
    if (res && res.errCode == 200) {
      localStorage.setItem("orderData", JSON.stringify(location.state));
      window.location.href = res.link;
    } else {
      toast.error("Payment failed!");
    }
  };
  return (
    <>
        <div className="h-screen bg-gradient-to-b from-white to-vnpay-blue mx-auto px-4 flex items-center justify-center">
            <div class="max-w-screen-lg mx-auto">
              <div>
                <h2 class="font-bold text-5xl text-red-500">
                  VNPAY
                </h2>
                <p class="py-4 text-xl font-semibold text-black mb-6">
                  Thông tin thanh toán
                </p>

                <div class="bg-white rounded shadow-lg shadow-vnpay-blue p-4 px-4 md:p-8 mb-6">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600 object-cover p-5">
                      <img src="/assets/images/Header/vnpaylogo.jpg" alt="" />
                    </div>

                    <div class="lg:col-span-2">
                      <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                          <label for="full_name">Loại Hoá Đơn</label>
                          <select
                            type="text"
                            id="orderType"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            value={inputValues.orderType}
                            onChange={(event) => handleOnChange(event)}
                            name="orderType"
                          >
                            <option value="billpayment">
                              Thanh toán hóa đơn
                            </option>
                          </select>
                        </div>

                        <div class="md:col-span-5">
                          <label for="email">Số tiền</label>
                          <input
                            type="text"
                            id="amount"
                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            name="amount"
                            disabled={true}
                            value={inputValues.amount}
                            onChange={(event) => handleOnChange(event)}
                          />
                        </div>

                        <div class="md:col-span-5">
                          <label for="address">Nội dung thanh toán</label>
                          <input
                            value={inputValues.orderDescription}
                            onChange={(event) => handleOnChange(event)}
                            name="orderDescription"
                            type="text"
                            id="orderDescription"
                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                            placeholder=""
                          />
                        </div>

                        <div class="md:col-span-2">
                          <label for="country">Ngân Hàng</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <select
                              value={inputValues.bankCode}
                              onChange={(event) => handleOnChange(event)}
                              name="bankCode"
                              className="px-4 w-full"
                            >
                              <option value=""> Không chọn </option>
                              <option value="VNPAYQR">
                                {" "}
                                Ngân hàng VNPAYQR
                              </option>
                              <option value="NCB"> Ngân hàng NCB</option>
                              <option value="SCB"> Ngân hàng SCB</option>
                              <option value="SACOMBANK">
                                {" "}
                                Ngân hàng SACOMBANK
                              </option>
                              <option value="EXIMBANK">
                                {" "}
                                Ngân hàng EXIMBANK
                              </option>
                              <option value="MSBANK"> Ngân hàng MSBANK</option>
                              <option value="NAMABANK">
                                {" "}
                                Ngân hàng NAMABANK
                              </option>
                              <option value="VISA"> Ngân hàng VISA</option>
                              <option value="VNMART"> Ngân hàng VNMART</option>
                              <option value="VIETINBANK">
                                {" "}
                                Ngân hàng VIETINBANK
                              </option>
                              <option value="VIETCOMBANK">
                                {" "}
                                Ngân hàng VIETCOMBANK
                              </option>
                              <option value="HDBANK"> Ngân hàng HDBANK</option>
                              <option value="DONGABANK">
                                {" "}
                                Ngân hàng Dong A
                              </option>
                              <option value="TPBANK"> Ngân hàng Tp Bank</option>
                              <option value="OJB"> Ngân hàng OceanBank</option>
                              <option value="BIDV"> Ngân hàng BIDV</option>
                              <option value="TECHCOMBANK">
                                {" "}
                                Ngân hàng Techcombank
                              </option>
                              <option value="VPBANK"> Ngân hàng VPBank</option>
                              <option value="AGRIBANK">
                                {" "}
                                Ngân hàng AGRIBANK
                              </option>
                              <option value="MBBANK"> Ngân hàng MBBank</option>
                              <option value="ACB"> Ngân hàng ACB</option>
                              <option value="OCB"> Ngân hàng OCB</option>
                              <option value="SHB"> Ngân hàng SHB</option>
                              <option value="IVB"> Ngân hàng IVB</option>
                            </select>
                          </div>
                        </div>

                        <div class="md:col-span-2">
                          <label for="state">Ngôn Ngữ</label>
                          <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <select
                              name="state"
                              id="state"
                              placeholder="State"
                              class="px-4 outline-none text-gray-800 w-full bg-transparent"
                              value=""
                            >
                              <option value="vn">Tiếng Việt</option>
                              <option value="en">Tiếng Anh</option>
                            </select>
                          </div>
                        </div>

                        <div class="md:col-span-5 text-right">
                          <div class="inline-flex items-end">
                            <button onClick={() => handleOnclick()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                              Thanh Toán
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  );
}

export default VnpayPaymentPage;
