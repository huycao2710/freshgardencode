import { axiosJWT } from "./UserAllService"

export const createNewOrder = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/order/create-neworder/${data.user}`, data, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getOrderByUserId = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-alldetailorder/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getDetailsInfoOrder = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-details-order/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const cancelOrderDetailsInfo = async (id, access_token, orderItems) => {
    const data = { orderItems, orderId: id }
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/order/cancel-order/${id}`, { data }, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllInfoOrder = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-allorder`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}