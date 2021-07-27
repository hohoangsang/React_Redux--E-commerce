import Type from "../../component/content/sidebar/Type"

export const filterCategories = (categories) => {
    return {
        type: FILTER_CATEGORIES,
        payload: categories
    }
}

export const filterSubCategories = (subCategories) => {
    return {
        type: FILTER_SUB_CATEGORIES,
        payload: subCategories
    }
}

export const filterPage = (page) => {
    return {
        type: FILTER_PAGE,
        payload: page
    }
}

export const filterType = (type) => {
    return {
        type: FILTER_TYPE,
        payload: type
    }
}

export const filterBrand = (brand) => {
    return {
        type: FILTER_BRAND,
        payload: brand
    }
}

export const filterSearchBrand = (brand) => {
    return {
        type: FILTER_SEARCH_BRAND,
        payload: brand
    }
}

export const filterRating = (rating) => {
    return {
        type: FILTER_RATING,
        payload: rating
    }
}

export const filterPriceRange = (priceRange) => {
    return {
        type: FILTER_PRICE_RANGE,
        payload: priceRange
    }
}

export const filterSearchPriceFromTo = (first, last) => {
    return {
        type: FILTER_SEARCH_PRICE_FROM_TO,
        payload: {
            first,
            last
        }
    }
}

export const filterSort = (sort) => {
    return {
        type: FILTER_SORT,
        payload: sort
    }
}

export const filterClear = () => {
    return {
        type: FILTER_CLEAR
    }
}