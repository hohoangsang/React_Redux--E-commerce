import React from 'react'
import Brand from './Brand'
import Categories from './Categories'
import Prices from './Prices'
import Rating from './Rating'
import Type from './Type'

function Sidebar(props) {
    const {
        staticProducts
    } = props

    return (
        <div className = "filter">
            <Categories
                staticProducts = {staticProducts}
            />
            <div className="filter__category">
                <h2 className = "categories__title">Refine By</h2>
                <Type />
                <Brand />
                <Rating />
                <Prices />
            </div>
        </div>
        
    )
}

export default Sidebar
