import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterPriceRange, filterSearchPriceFromTo } from '../../../redux/action/FilterAction';
import { getListFilter } from '../../../util/index'

function Prices() {
    const [inputs, setInputs] = useState({
        firstNumber: "",
        lastNumber: "",
    })

    const { allData } = useSelector(state => state.products);
    const dispatch = useDispatch();

    let pricesRange = getListFilter(allData, "price_range");

    for (let i = 0; i < pricesRange.length - 2; i++) {
        for (let j = i + 1; j < pricesRange.length - 1; j++) {
            let current = pricesRange[i].indexOf("-");
            let next = pricesRange[j].indexOf("-");
            if (parseInt(pricesRange[i].slice(current + 1).trim()) > parseInt(pricesRange[j].slice(next + 1).trim())) {
                let temp = pricesRange[i];
                pricesRange[i] = pricesRange[j];
                pricesRange[j] = temp;
            }
        }
    }

    const handleClickPrice = (price_range) => {
        dispatch(filterPriceRange(price_range))
    }

    const handleChangePrice = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value.trim()
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(filterSearchPriceFromTo(inputs.firstNumber, inputs.lastNumber))
    }


    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Prices</h4>
            <div className="filter__categories__prices">
                <nav>
                    <ul>
                        {pricesRange.map((item, key) => {
                            return (item.indexOf("-") === -1
                                ? <li key = {key} onClick = {() => handleClickPrice(item)}>{item}</li>
                                : <li key = {key} onClick = {() => handleClickPrice(item)}>$ {item}</li>)
                        })}
                    </ul>
                </nav>
                <form action="" onSubmit={handleSubmit} className="price-ranges--form">
                    <label className="price-ranges--label">
                        <span className="price-ranges--currency">$</span>
                        <input
                            type="number"
                            className="price-ranges--input"
                            name="firstNumber"
                            value = {inputs.firstNumber}
                            onChange={handleChangePrice}
                        />
                    </label>
                    <span className="price-ranges--separator">to</span>
                    <label className="price-ranges--label">
                        <span className="price-ranges--currency">$</span>
                        <input
                            type="number"
                            className="price-ranges--input"
                            name="lastNumber"
                            value = {inputs.lastNumber}
                            onChange={handleChangePrice}
                        />
                    </label>
                    <br />
                    <button className="price-ranges--button" type="submit">Go</button>
                </form>
            </div>
        </div>
    )
}

export default Prices
