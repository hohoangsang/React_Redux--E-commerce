import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSort } from '../../../redux/action/FilterAction';

function Sort() { 
    const { _order } = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const handleSortProducts = (event) => {
        const orderBy = event.target.value;
        dispatch(filterSort(orderBy))
    }

    return (
        <div className = "sort-by">
            <label htmlFor="">Sort by</label>
            <div className="sort-by-selector">
                <select id="select" value={_order} onChange = {(event) => handleSortProducts(event)}>
                    <option value="feature">Feature</option>
                    <option value="asc">Price asc</option>
                    <option value="desc">Price desc</option>
                </select>
            </div>
        </div>
    )
}

export default Sort     