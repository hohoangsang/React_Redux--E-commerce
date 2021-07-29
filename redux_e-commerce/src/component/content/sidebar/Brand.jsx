import React, { useState, useEffect } from 'react'
import { getListFilter } from '../../../util';
import { useSelector, useDispatch } from 'react-redux';
import { filterBrand, filterSearchBrand } from '../../../redux/action/FilterAction'

function Brand() {
    const [input, setInput] = useState("");

    const { allData } = useSelector(state => state.products)
    const arrayBrand = useSelector(state => state.filter.brand)
    const dispatch = useDispatch()

    const listBrand = getListFilter(allData, "brand")

    const handleChange = (name) => {
        dispatch(filterBrand(name))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(filterBrand(input))
        setInput("");
    }

    const handleChangeInput = (event) => {
        setInput(event.target.value);
    }

    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Brand</h4>
            <div className="filter__categories__brand">
                <form onSubmit={(event) => handleSubmit(event)} className="search-brand--form">
                    <button className="search-brand--btn">
                        <i className="fas fa-search"></i>
                    </button>
                    <input className="search-brand--input"
                        name="values"
                        type="text"
                        placeholder="Search for other..."
                        value={input}
                        onChange={(event) => handleChangeInput(event)}
                    />
                </form>
                <nav>
                    <ul>
                        {
                            listBrand.map((item, key) => {
                                return (
                                    <li key = {key}>
                                        <label className="brand-item--label">
                                            <input
                                                type="checkbox"
                                                name={item}
                                                value={item}
                                                checked={arrayBrand.includes(item)}
                                                onChange={() => handleChange(item)}
                                                className="brand-item--input" />
                                            <span className="item--name">{item}</span>
                                            <span className="item-count">({allData.filter(product => product.brand === item).length})</span>
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Brand