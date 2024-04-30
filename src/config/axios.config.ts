import axiosConfig from "axios"

const baseURL = ""

const axios = axiosConfig.create({
    baseURL,
    timeout: 1000,
})

export default axios