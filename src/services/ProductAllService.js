import axios from "axios"
import { axiosJWT } from "./UserAllService"

export const getAllProduct = async (page, limit) => {
    let res = {}
    // if (search?.length > 0) {
    //     res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-allproduct?filter=name&filter=${search}&limit=${limit}`)
    // } else {
    res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-allproduct?page=${page}&limit=${limit}`)
    // }
    return res.data
}

export const getProductCategory = async (category, page, limit) => {
    if (category) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-allproduct?filter=category&filter=${category}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const createNewProduct = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create-newproduct`, data)
    return res.data
}

export const getDetailsInfoProduct = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-detailproduct/${id}`)
    return res.data
}


export const updateInfoProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/product/update-infoproduct/${id}`, data, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}
export const deleteInfoProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/delete-product/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyProduct = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/product/delete-manyproduct/`, data, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}


export const getAllCategory = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all-category`)
    return res.data
}

export const getProductsByCategory = async (categoryName) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-products-by-category/${categoryName}`);
    return res.data;
};

export const getFeaturedProducts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-featured-products`)
    return res.data
}