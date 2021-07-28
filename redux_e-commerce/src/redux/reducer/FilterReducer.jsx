import {
    FILTER_CATEGORIES,
    FILTER_SUB_CATEGORIES,
    FILTER_PAGE,
    FILTER_TYPE,
    FILTER_BRAND,
    FILTER_SEARCH_BRAND,
    FILTER_RATING,
    FILTER_PRICE_RANGE,
    FILTER_SEARCH_PRICE_FROM_TO,
    FILTER_SORT,
    FILTER_CLEAR
} from '../action/FilterAction'

const initialState = {
    _page: 1,
    _limit: 16,
    _sort: "",
    type: [],
    brand: [],
    q: ""
}

const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_CATEGORIES: {
            let newState = {...state}
            delete newState["hierarchicalCategories.lvl1"]
            return {
                ...newState,
                _page: 1,
                "hierarchicalCategories.lvl0": action.payload
            }
        }

        case FILTER_SUB_CATEGORIES: {
            return {
                ...state,
                _page: 1,
                "hierarchicalCategories.lvl1": action.payload
            }
        }

        case FILTER_PAGE: {
            return{
                ...state,
                _page: action.payload
            }
        }

        case FILTER_TYPE: {
            let newState = {...state};
            let arrayType = [...newState.type];
            let find = arrayType.indexOf(action.payload)
            if(find > -1){
                arrayType.splice(action.payload, 1)
            } else {
                arrayType.push(action.payload)
            }
            return {
                ...newState,
                _page: 1,
                type: arrayType
            }
        }

        case FILTER_BRAND, FILTER_SEARCH_BRAND: {
            let newState = {...state}
            let arrayBrand = [...newState.brand]
            let find = arrayBrand.indexOf(action.payload)
            if (find > -1){
                arrayBrand.splice(action.payload, 1)
            } else {
                arrayBrand.push(action.payload)
            }
            return {
                ...newState,
                _page: 1,
                brand: arrayBrand
            }
        }

        case FILTER_RATING: {
            return state
        }

        case FILTER_PRICE_RANGE: {
            let newState = {...state};
            return {
                ...newState,
                _page: 1,
                price_range: action.payload
            }
        }
        
        case FILTER_SEARCH_PRICE_FROM_TO: {
            let newState = {...state};
            delete newState.price_range;
            if (action.payload.first){
                newState.price_gte = action.payload.first
            }
            if(action.payload.last){
                newState.price_lte = action.payload.last
            }
            return {
                ...newState,
                _page: 1
            }
        }

        case FILTER_SORT: {
            let newState = {...state}
            if (action.payload === "feature"){
                delete newState._sort;
                delete newState._order;
            } else {
                newState._sort="price"
                newState._order=action.payload
            }
            return newState
        }

        case FILTER_CLEAR: {
            return {
                _page: 1,
                _limit: 16,
                _sort: "",
                type: [],
                brand: [],
                q: ""
            }
        }
        default: 
            return state
    }
}

export default FilterReducer
