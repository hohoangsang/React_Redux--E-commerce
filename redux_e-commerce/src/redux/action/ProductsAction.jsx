export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST"
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS"
export const GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL"

export const GET_FILTER_PRODUCTS_REQUEST = "GET_FILTER_PRODUCTS_REQUEST"
export const GET_FILTER_PRODUCTS_SUCCESS = "GET_FILTER_PRODUCTS_SUCCESS"
export const GET_FILTER_PRODUCTS_FAIL = "GET_FILTER_PRODUCTS_FAIL"

export const getAllProductsRequest = () => {
    return {
        type: GET_ALL_PRODUCTS_REQUEST
    }
}

export const getAllProductsSuccess = (productsData) => {
    return {
        type:  GET_ALL_PRODUCTS_SUCCESS,
        payload: productsData
    }
}

export const getAllProductsFail  = (error) => {
    return{
        type: GET_ALL_PRODUCTS_FAIL,
        payload: error
    }
}

export const getFilterProductsRequest = () => {
    return {
        type: GET_FILTER_PRODUCTS_REQUEST
    }
}

export const getFilterProductsSuccess = (filterData) => {
    return {
        type: GET_FILTER_PRODUCTS_SUCCESS,
        payload: filterData
    }
}

export const getFilterProductsFail = (error) => {
    return {
        type: GET_FILTER_PRODUCTS_FAIL,
        payload: error
    }
}