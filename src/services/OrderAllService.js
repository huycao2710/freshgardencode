import { axiosJWT } from "./UserService"

export const createNewOrder = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.BACK_END_API_URL}/order/create-neworder/${data.user}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getOrderByUserId = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.BACK_END_API_URL}/order/get-alldetailorder/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getDetailsInfoOrder = async (id, access_token) => {
    const res = await axiosJWT.get(`${process.env.BACK_END_API_URL}/order/get-details-order/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const cancelOrderDetailsInfo = async (id, access_token, orderItems, userId) => {
    const data = { orderItems, orderId: id }
    const res = await axiosJWT.delete(`${process.env.BACK_END_API_URL}/order/cancel-order/${userId}`, { data }, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllInfoOrder = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.BACK_END_API_URL}/order/get-allorder`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}