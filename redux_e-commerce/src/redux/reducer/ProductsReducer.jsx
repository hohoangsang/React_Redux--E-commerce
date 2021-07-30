import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,

    GET_FILTER_PRODUCTS_REQUEST,
    GET_FILTER_PRODUCTS_SUCCESS,
    GET_FILTER_PRODUCTS_FAIL
} from '../action/ProductsAction'

const initialState = {
    allData: [],
    filterData: [],
    loading: false,
    error: null
}

const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST: {
            return {
                ...state,
                allData: [],
                loading: true,
                error: null
            }
        }

        case GET_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                allData: action.payload.data,
                loading: false,
                error: null,
                total: action.payload.total
            }
        }

        case GET_ALL_PRODUCTS_FAIL: {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }

        case GET_FILTER_PRODUCTS_REQUEST: {
            return {
                ...state,
                filterData: [],
                loading: true,
                error: null
            }
        }

        case GET_FILTER_PRODUCTS_SUCCESS: {
            return {
                ...state,
                filterData: action.payload.data,
                loading: false,
                error: null,
                total: action.payload.total
            }
        }

        case GET_FILTER_PRODUCTS_FAIL: {
            return {
                ...state,
                filterData: [],
                loading: false,
                error: action.payload
            }
        }

        default: 
            return state
    }
}

export default ProductsReducer
