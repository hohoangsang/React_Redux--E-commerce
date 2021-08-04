import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://react-e-commerce-api.herokuapp.com/api',
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
})
export default axiosClient;