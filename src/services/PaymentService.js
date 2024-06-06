import axios from "axios"
import { useNavigate } from "react-router-dom"



export const getConfig = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/payment/config`)
    return res.data
}

export const ZaloPayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/zalopay`, data)
    return res.data
}
export const Check_ZaloPayment = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/payment/check_zalopay`, data)
    return res.data
}
