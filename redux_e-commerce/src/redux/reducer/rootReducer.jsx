import {combineReducers} from 'redux'
import FilterReducer from './FilterReducer'
import ProductsReducer from './ProductsReducer'

export default combineReducers({
    products: ProductsReducer,
    filter: FilterReducer
})