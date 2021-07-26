import React from 'react'
import Brand from './Brand'
import Categories from './Categories'
import Prices from './Prices'
import Rating from './Rating'
import Type from './Type'

function Sidebar(props) {
    const {
        staticProducts,
        products,
        checked,
        renderProductByCategories,
        resetFilter,
        filterType,
        filterBrand,
        handleClickPrice,
        handleSubmitPrices
    } = props

    return (
        <div className = "filter">
            <Categories
                staticProducts = {staticProducts}
                checked = {checked}
                renderProductByCategories = {renderProductByCategories}
                resetFilter = {resetFilter}
            />
            <div className="filter__category">
                <h2 className = "categories__title">Refine By</h2>
                <Type 
                    staticProducts = {staticProducts}
                    checked = {checked}
                    filterType = {filterType}
                />
                <Brand 
                    staticProducts = {staticProducts}
                    checked = {checked}
                    filterBrand = {filterBrand}
                />
                <Rating 
                    products = {products}
                    checked = {checked}
                />
                <Prices 
                    products = {products}
                    checked = {checked}
                    handleClickPrice = {handleClickPrice}
                    handleSubmitPrices = {handleSubmitPrices}
                />
            </div>
        </div>
        
    )
}

export default Sidebar
