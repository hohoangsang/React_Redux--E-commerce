import React from 'react'
import Brand from './Brand'
import Categories from './Categories'
import Prices from './Prices'
import Rating from './Rating'
import Type from './Type'

function Sidebar(props) {
    const {
        products,
        checked,
    } = props

    return (
        <div className = "filter">
            <Categories />
            <div className="filter__category">
                <h2 className = "categories__title">Refine By</h2>
                <Type />
                <Brand />
                <Rating 
                    products = {products}
                    checked = {checked}
                />
                <Prices />
            </div>
        </div>
        
    )
}

export default Sidebar