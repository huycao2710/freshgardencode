import axios from "axios"
import { useNavigate } from "react-router-dom"

export const getConfig = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/payment/config`)
    return res.data
}

//zalo
export const ZaloPayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/zalopay`, data);
    return res.data;
};

export const Check_ZaloPayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/check_zalopay`, data)
    return res.data
}

//momo
export const MomoPayment = async (data) => {
    const payload = {
        ...data,
    };
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/momo`, payload)
    return res.data
}

export const CheckMomoPayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/check_momo`, data)
    return res.data
}

//vnpay
export const paymentOrderVnpay = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/vnpay`, data)
    return res.data
}
//chưa sửa
export const confirmOrderVnpay = async (data) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/payment/vnpay-return`, data)
    return res.data
}
//stripe
export const StripePayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/stripe`, data)
    return res.data
}
export const CheckStripePayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/check_stripe`, data)
    return res.data
}