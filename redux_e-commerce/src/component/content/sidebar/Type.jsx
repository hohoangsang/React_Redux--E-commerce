import React from 'react'
import { getListFilter } from '../../../util';
import { useSelector, useDispatch } from 'react-redux'
import { filterType } from '../../../redux/action/FilterAction'

function Type() {
    const checkedType = useSelector(state => state.filter.type)
    const allData = useSelector(state => state.products.allData)
    const dispatch = useDispatch()

    const handleChange = (item) => {
        dispatch(filterType(item))
    }

    const listType = getListFilter(allData, "type")

    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Type</h4>
            <div className="filter__categories__type">
                <nav>
                    <ul>
                        {
                            listType.map((item, key) => {
                                return (
                                    <li key = {key}>
                                        <label className="type-item--label">
                                            <input
                                                type="checkbox"
                                                name={item}
                                                value={item}
                                                onChange={() => handleChange(item)}
                                                checked = {checkedType.includes(item)}
                                                className="type-item--input" 
                                            />
                                            <span className="item-name">{item}</span>
                                            <span className="item-count">({allData.filter(product => product.type === item).length})</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div >
    )
}

export default Type