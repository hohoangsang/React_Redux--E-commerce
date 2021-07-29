import { put, select, takeLatest } from 'redux-saga/effects';

import productsApi from '../../api/productsApi'
import { 
    getAllProductsFail, 
    getAllProductsSuccess, 
    getFilterProductsFail, 
    getFilterProductsSuccess, 
    GET_ALL_PRODUCTS_REQUEST, 
    GET_FILTER_PRODUCTS_REQUEST 
} from '../action/ProductsAction';

function* fectchAllProducts() {
    try {
        const data  = yield productsApi.getAll();
        yield put(
            getAllProductsSuccess(data)
        )
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getAllProductsFail(error)
        )
    }
}

function* fetchFilterProducts() {
    try {
        const filterParams = yield select((state) => state.filter);
        const data = yield productsApi.getAll(filterParams)
        yield put(
            getFilterProductsSuccess(data)
        )
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getFilterProductsFail(error)
        )
    }
}

function* productsSaga() {
    yield takeLatest(GET_ALL_PRODUCTS_REQUEST, fectchAllProducts);
    yield takeLatest(GET_FILTER_PRODUCTS_REQUEST, fetchFilterProducts);
}

export default productsSaga
