import axiosClient from "./axiosClient";

const productsApi = {
    getAll: (params) => {
        const url = "/products";
        return axiosClient.get(url, { params })
    },
}

export default productsApi