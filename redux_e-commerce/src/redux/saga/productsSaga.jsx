import { put, select, takeLatest, call, join, fork } from 'redux-saga/effects';

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
        const { getAll } = productsApi
        const { data }= yield call(getAll)
        yield put(
            getAllProductsSuccess({
                data,
                total: data.length
            })
        );
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getAllProductsFail(error)
        );
    }
}

function* fetchFilterProducts() {
    try {
        const { getAll } = productsApi
        const filterParams = yield select((state) => state.filter);
        const forkTask = yield fork(getAll, filterParams)
        const { data, headers} = yield join(forkTask)

        yield put(
            getFilterProductsSuccess({
                data,
                total: headers["x-total-count"]
            })
        );
    } catch (error) {
        console.log("Saga Fail: ", error)
        yield put(
            getFilterProductsFail(error)
        );
    }
}

function* productsSaga() {
    yield takeLatest(GET_ALL_PRODUCTS_REQUEST, fectchAllProducts);
    yield takeLatest(GET_FILTER_PRODUCTS_REQUEST, fetchFilterProducts);
}

export default productsSaga
