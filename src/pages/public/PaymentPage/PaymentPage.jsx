import { Form, Radio } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import {
  Label,
  WrapperInfo,
  WrapperLeft,
  WrapperRadio,
  WrapperRadioSecond,
  WrapperRight,
  WrapperTotal,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../../../util";
import { useMutationHooks } from "../../../hooks/useMutationHook";
import * as UserAllService from "../../../services/UserAllService";
import * as OrderAllService from "../../../services/OrderAllService";
import * as message from "../../../components/global/MessageComponent/Message";
import { updateUser } from "../../../redux/slides/userAllSlide";
import { useNavigate } from "react-router-dom";
import { removeAllOrderProduct } from "../../../redux/slides/orderAllSlide";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as PaymentService from "../../../services/PaymentService";
import Loading from "../../../components/global/LoadingComponent/LoadingComponent";
import ModalComponent from "../../../components/admin/ModalComponent/ModelComponent";
import InputComponent from "../../../components/admin/InputComponent/InputComponent";
import ButtonComp from "../../../components/global/ButtonComponent/ButtonComp";
import axios from "axios";

const PaymentPage = () => {
  const order = useSelector((state) => state.order);
  const user = useSelector((state) => state.user);
  const [delivery, setDelivery] = useState('')
  const [payment, setPayment] = useState('')
  const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false);
  const [sdkReady, setSdkReady] = useState(false);
  const [stateUserDetails, setStateUserDetails] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: ""
  });
  const navigate = useNavigate()
  const [form] = Form.useForm();
  const dispatch = useDispatch();


  useEffect(() => {
    form.setFieldsValue(stateUserDetails)
  }, [form, stateUserDetails])

  useEffect(() => {
    if (isOpenModalUpdateInfo) {
      setStateUserDetails({
        city: user?.city,
        fullName: user?.fullName,
        address: user?.address,
        phone: user?.phone
      })
    }
  }, [isOpenModalUpdateInfo])

  const handleChangeAddress = () => {
    setIsOpenModalUpdateInfo(true)
  }

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


  const handleAddOrder = () => {
    if (user?.access_token && order?.orderItemsSelected && user?.fullName && user?.address && user?.phone && user?.city && priceMemo && user?.id) {
      // eslint-disable-next-line no-unused-expressions
      mutationAddOrder.mutate(
        {
          token: user?.access_token, orderItems: order?.orderItemsSelected,
          fullName: user?.fullName, address: user?.address, phone: user?.phone, city: user?.city,
          paymentMethod: payment, itemsPrice: priceMemo, shippingPrice: deliveryPriceMemo,
          totalPrice: totalPriceMemo, user: user?.id, email: user?.email
        }
      ), {
        onSuccess: () => {
          message.success('Đặt hàng thành công')
        }
      }
    }
  }

  const mutationUpdate = useMutationHooks(
    (data) => {
      const { id,
        token,
        ...rests } = data
      const res = UserAllService.updateInfoUser(
        id,
        { ...rests }, token)
      return res
    },
  )

  const mutationAddOrder = useMutationHooks(
    (data) => {
      const {
        token,
        ...rests } = data
      const res = OrderAllService.createNewOrder(
        { ...rests }, token)
      return res
    },
  )

  const { isPending, data } = mutationUpdate;
  const { data: dataAdd, isPending: isPendingAddOrder, isSuccess, isError } = mutationAddOrder;

  useEffect(() => {
    if (isSuccess && dataAdd?.status === "OK") {
      const arrayOrdered = []
      order?.orderItemsSelected?.forEach(element => {
        arrayOrdered.push(element.product)
      });
      dispatch(removeAllOrderProduct({ listChecked: arrayOrdered }))
      message.success('Đặt hàng thành công!');
      navigate('/orderSuccess', {
        state: {
          delivery,
          payment,
          orders: order?.orderItemsSelected,
          totalPriceMemo: totalPriceMemo
        }
      })
    } else if (isError) {
      message.error('Đặt hàng không thành công!');
    }
  }, [isSuccess, isError]);

  const handleCancelUpdate = () => {
    setStateUserDetails({
      fullName: '',
      email: '',
      phone: '',
      isAdmin: false,
    })
    form.resetFields()
    setIsOpenModalUpdateInfo(false)
  }

  const handleDelivery = (e) => {
    setDelivery(e.target.value)
  }

  const handlePayment = (e) => {
    setPayment(e.target.value)
  }

  const handleUpdateInfoUser = () => {
    const { fullName, address, city, phone } = stateUserDetails
    if (fullName && address && city && phone) {
      mutationUpdate.mutate({ id: user?.id, token: user?.access_token, ...stateUserDetails }, {
        onSuccess: () => {
          dispatch(updateUser({ fullName, address, city, phone }))
          setIsOpenModalUpdateInfo(false)
        }
      })
    }
  }

  const handleOnchangeDetails = (e) => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value
    })
  }

  const onSuccessPaypal = (details, data) => {
    mutationAddOrder.mutate(
      {
        token: user?.access_token,
        orderItems: order?.orderItemsSelected,
        fullName: user?.fullName,
        address: user?.address,
        phone: user?.phone,
        city: user?.city,
        paymentMethod: payment,
        itemsPrice: priceMemo,
        shippingPrice: deliveryPriceMemo,
        totalPrice: totalPriceMemo,
        user: user?.id,
        isPaid: false,
        paidAt: details.update_time,
        email: user?.email
      }
    )
  }

  const btnzalopay = async () => {
    const session = await PaymentService.ZaloPayment(data);
    const url = session.data.order_url
    const windowFeatures = 'location=yes,height=570,width=520,scrollbars=yes,status=yes,top=100,left=500'
    window.open(url, 'zalopay', windowFeatures)
  }

  const btnmomo = async () => {
    const session = await PaymentService.MomoPayment(data);
    const url = session.data.payUrl
    const windowFeatures = 'location=yes,height=570,width=520,scrollbars=yes,status=yes,top=100,left=500'
    window.open(url, 'momo', windowFeatures)
  }

  const btnstripe = async () => {
    const session = await PaymentService.StripePayment(data);
    const url = session.data.pay_Url
    const windowFeatures = 'location=yes,height=570,width=520,scrollbars=yes,status=yes,top=100,left=500'
    window.open(url, 'stripe', windowFeatures)
  }

  const addPaypalScript = async () => {
    const { data } = await PaymentService.getConfig()
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`
    script.async = true;
    script.onload = () => {
      setSdkReady(true)
    }
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (payment === 'paypal' && !window.paypal) {
      addPaypalScript()
    } else {
      setSdkReady(true)
    }
  }, [payment])

  //vnpay
  const btnvnpay = () => {
    // Encode data as query parameters if needed
    const queryParams = new URLSearchParams({
      total: totalPriceMemo
    }).toString();
    // Redirect to VnpayPaymentPage with data in URL
    navigate(`/vnpay?${queryParams}`, { state: { totalPriceMemo } });
  };
  useEffect(() => {
    if (payment === 'paypal' && !window.paypal) {
      addPaypalScript()
    } else {
      setSdkReady(true)
    }
  }, [payment])
  return (
    <div style={{ background: "#f5f5fa", with: "100%", height: "100vh" }}>
      <Loading isPending={isPendingAddOrder}>
        <div style={{ height: "100%", width: "1270px", margin: "0 auto" }}>
          <h3 style={{ fontWeight: "bold" }}>Thanh toán</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <WrapperLeft>
              <WrapperInfo>
                <div>
                  <Label>Chọn phương thức giao hàng</Label>
                  <WrapperRadio onChange={handleDelivery} value={delivery}>
                    <Radio value="viettelpost"><span style={{ color: '#ea8500', fontWeight: 'bold' }}>VIETTEL POST</span> Giao hàng tiết kiệm</Radio>
                    <Radio value="shopee"><span style={{ color: '#ea8500', fontWeight: 'bold' }}>SHOPEE</span> Giao hàng tiết kiệm</Radio>
                  </WrapperRadio>
                </div>
              </WrapperInfo>
              <WrapperInfo>
                <div>
                  <Label>Chọn phương thức thanh toán</Label>
                  <WrapperRadioSecond onChange={handlePayment} value={payment}>
                    <Radio value="later_money"> Thanh toán tiền mặt khi nhận hàng</Radio>
                    <Radio value="paypal"> Thanh toán tiền bằng Paypal</Radio>
                    <Radio value="zalopay"> Thanh toán tiền bằng ZaloPay</Radio>
                    <Radio value="momo"> Thanh toán tiền bằng Momo</Radio>
                    <Radio value="vnpay"> Thanh toán tiền bằng VNPay</Radio>
                    <Radio value="stripe"> Thanh toán tiền bằng Stripe</Radio>
                  </WrapperRadioSecond>
                </div>
              </WrapperInfo>
            </WrapperLeft>
            <WrapperRight>
              <div style={{ width: "100%" }}>
                <WrapperInfo>
                  <span>Địa chỉ giao hàng: </span>
                  <span style={{ fontWeight: 'bold' }}>{`${user?.address}, ${user?.city}`}</span>
                  <span onClick={handleChangeAddress} style={{ color: 'green', cursor: 'pointer' }}> Thay đổi</span>
                </WrapperInfo>
                <WrapperInfo>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Tạm tính</span>
                    <span
                      style={{
                        color: "#000",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(priceMemo)}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Giảm giá</span>
                    <span
                      style={{
                        color: "#000",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >{convertPrice(priceDiscountMemo)}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Phí giao hàng</span>
                    <span
                      style={{
                        color: "#000",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(deliveryPriceMemo)}
                    </span>
                  </div>
                </WrapperInfo>
                <WrapperTotal>
                  <span>Tổng tiền</span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span
                      style={{
                        color: "rgb(254, 56, 52)",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {convertPrice(totalPriceMemo)}
                    </span>
                    <span style={{ color: "#000", fontSize: "11px" }}>
                      (Đã bao gồm VAT nếu có)
                    </span>
                  </span>
                </WrapperTotal>
              </div>
              {payment === 'later_money' &&
                <ButtonComp
                  onClick={() => handleAddOrder()}
                  size={40}
                  styleButton={{
                    background: "rgb(255, 57, 69)",
                    height: "48px",
                    width: "360px",
                    border: "none",
                    borderRadius: "4px",
                    marginTop: "10px",
                  }}
                  textbutton={"Đặt hàng"}
                  styleTextButton={{
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                ></ButtonComp>
              }
              {
                payment === 'zalopay' &&
                <ButtonComp
                  onClick={() => btnzalopay()}
                  size={40}
                  styleButton={{
                    background: "rgb(255, 57, 69)",
                    height: '48px',
                    width: '320px',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  textbutton={'zalopay'}
                  styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '700' }}
                >
                </ButtonComp>
              }
              {
                payment === 'momo' &&
                <ButtonComp
                  onClick={() => btnmomo()}
                  size={40}
                  styleButton={{
                    background: "rgb(255, 57, 69)",
                    height: '48px',
                    width: '320px',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  textbutton={'momo'}
                  styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '700' }}
                >
                </ButtonComp>
              }
              {
                payment === 'stripe' &&
                <ButtonComp
                  onClick={() => btnstripe()}
                  size={40}
                  styleButton={{
                    background: "rgb(255, 57, 69)",
                    height: '48px',
                    width: '320px',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  textbutton={'stripe'}
                  styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '700' }}
                >
                </ButtonComp>
              }
              {/*  start of vnpay */}
              {
                payment === 'vnpay' &&
                <ButtonComp
                  onClick={() => btnvnpay()}
                  size={40}
                  styleButton={{
                    background: "rgb(255, 57, 69)",
                    height: '48px',
                    width: '320px',
                    border: 'none',
                    borderRadius: '4px'
                  }}
                  textbutton={'vnpay'}
                  styleTextButton={{ color: '#fff', fontSize: '25px', fontWeight: '700' }}
                >
                </ButtonComp>
              }
              {/* end of vnpay */}

              {payment === 'paypal' && sdkReady &&
                <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
                  <div style={{ width: '320px' }}>
                    <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: (totalPriceMemo / 24540).toFixed(2),
                              },
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          onSuccessPaypal(details, data);
                        });
                      }}
                      onError={(err) => {
                        alert("Thanh toán không thành công. Vui lòng thử lại sau!");
                      }}
                    />
                  </div>
                </PayPalScriptProvider>
              }
            </WrapperRight>
          </div>
        </div>
        <ModalComponent
          title="Cập nhật thông tin giao hàng"
          open={isOpenModalUpdateInfo}
          onCancel={handleCancelUpdate}
          onOk={handleUpdateInfoUser}
        >
          <Loading isPending={isPending}>
            <Form
              name="basic"
              labelCol={{
                span: 7,
              }}
              wrapperCol={{
                span: 17,
              }}
              // onFinish={onUpdateUser}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                label="Họ tên"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập họ tên!",
                  },
                ]}
              >
                <InputComponent
                  value={stateUserDetails["fullName"]}
                  onChange={handleOnchangeDetails}
                  name="fullName"
                />
              </Form.Item>

              <Form.Item
                label="Thành phố"
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập thành phố!",
                  },
                ]}
              >
                <InputComponent
                  value={stateUserDetails["city"]}
                  onChange={handleOnchangeDetails}
                  name="city"
                />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập số điện thoại!",
                  },
                ]}
              >
                <InputComponent
                  value={stateUserDetails.phone}
                  onChange={handleOnchangeDetails}
                  name="phone"
                />
              </Form.Item>

              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ!",
                  },
                ]}
              >
                <InputComponent
                  value={stateUserDetails.address}
                  onChange={handleOnchangeDetails}
                  name="address"
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 20,
                  span: 16,
                }}
              ></Form.Item>
            </Form>
          </Loading>
        </ModalComponent>
      </Loading>
    </div>
  );
};

export default PaymentPage;