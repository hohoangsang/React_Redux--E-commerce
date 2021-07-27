import React, { useState, useEffect } from 'react'

function Prices(props) {
    const {
        products,
        checked,
        handleClickPrice,
        handleSubmitPrices
    } = props

    const [inputs, setInputs] = useState({
        firstNumber: "",
        lastNumber: "",
    })

    useEffect(() => {
        if(!checked){
            setInputs({
                firstNumber: "",
                lastNumber: "",
            })
        }
    }, [checked])

    let pricesRange = products.map(item => {
        return item.price_range
    })

    pricesRange = [...new Set(pricesRange)]

    pricesRange.sort();

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

    const handleChangePrice = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value.trim()
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSubmitPrices(inputs.firstNumber, inputs.lastNumber)
        if (checked){
            setInputs({
                firstNumber: '',
                lastNumber: ''
            })
        }
    }


    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Prices</h4>
            <div className="filter__categories__prices">
                <nav>
                    <ul>
                        {pricesRange.map(item => {
                            return (item.indexOf("-") == -1
                                ? <li onClick = {() => handleClickPrice(item)}>{item}</li>
                                : <li onClick = {() => handleClickPrice(item)}>$ {item}</li>)
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
                            // value={this.state.firstNumber} 
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
                            // value={this.state.lastNumber} 
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
