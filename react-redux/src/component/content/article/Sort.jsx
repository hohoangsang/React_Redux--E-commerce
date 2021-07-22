import React from 'react'

function Sort(props) {
    const {
        handleSortProducts
    } = props
    return (
        <div className = "sort-by">
            <label htmlFor="">Sort by</label>
            <div className = "sort-by-selector">
                <select name="" onChange = {handleSortProducts}>
                    <option>Feature</option>
                    <option value="asc">Price asc</option>
                    <option value="desc">Price desc</option>
                </select>
            </div>
        </div>
    )
}

export default Sort
