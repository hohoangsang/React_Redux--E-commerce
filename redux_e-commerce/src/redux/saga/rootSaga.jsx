import { spawn } from "redux-saga/effects"
import productsSaga from './productsSaga'

function* rootSaga() {
    yield spawn(productsSaga);
}

export default rootSaga;