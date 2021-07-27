import React, { useState } from 'react'

function Header(props) {
    const {
        searchProducts
    } = props

    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchProducts(input);
        setInput("");
    }

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__logo">
                    <a href="index.html">
                        <img src={"./img/logo-is.png"} alt="logo-company" />
                    </a>
                </div>
                <div className="header__title">
                    <h1>
                        <a href="index.html">amazing</a>
                    </h1>
                </div>
                <div className = "header__search">
                    <form action="" className = "header__search-form" onSubmit = {(event) => handleSubmit(event)}>
                        <input 
                            className = "header__search-input"
                            type="text"
                            placeholder = "Search a product"
                            value = {input}
                            onChange = {(event) => handleChange(event)}
                        />
                        <button className = "header__search-btn"> 
                            <i className = "fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
