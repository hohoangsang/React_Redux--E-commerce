import React from 'react'
import Brand from './Brand'
import Categories from './Categories'
import Prices from './Prices'
import Rating from './Rating'
import Type from './Type'

function Sidebar() {
    return (
        <div className = "filter">
            <Categories/>
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
