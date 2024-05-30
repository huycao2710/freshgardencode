import axios from "axios"

export const getConfig = async () => {
    const res = await axios.get(`${process.env.BACK_END_API_URL}/payment/config`)
    return res.data
}