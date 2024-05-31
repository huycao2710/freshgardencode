import axios from "axios"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, data)
    return res.data
}

export const registerUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, data)
    return res.data
}

export const getDetailsInfoUser = async (id, access_token) => {
    const url = `${process.env.REACT_APP_API_URL}/user/get-detailuser/${id}`;

    console.log('Request URL:', url);
    console.log('Access Token:', access_token);

    try {
        const res = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching user details:', error.response || error.message);
        throw error;
    }
};

export const deleteInfoUser = async (id, data, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${id}`, data, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}



export const getAllInfoUser = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/user/get-alluser`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return res.data
}


export const refreshToken = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
        withCrendentials: true
    })

    return res.data
}

export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`)
    return res.data
}

export const updateInfoUser = async (id, data, access_token) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/user/update-infouser/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyUser = async (data, access_token) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/user/delete-manyuser/`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}