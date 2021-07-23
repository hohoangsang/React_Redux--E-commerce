import React, { useState } from 'react'

function Brand(props) {
    const {
        staticProducts,
        checked
    } = props

    const [checkedBrand, setCheckedBrand] = useState([]);
    const [values, setValues] = useState("");

    let listBrand = staticProducts.map(item => item.type);
    listBrand = [...new Set(listBrand)].sort();

    const setUpCheckedBrand = (values) => {
        let newArray = checkedBrand;
        let find = newArray.indexOf(values);
        if (find > -1) {
            newArray.splice(find, 1);
        } else {
            newArray.push(values);
        }

        setCheckedBrand(newArray);
    }


    const handleChange = (name) => {
        const brand = "brand"
        setUpCheckedBrand(name)
        // renderBrand(checkedBrand, brand);
    }

    const handleSubmit = () => {

    }

    const handleChangeValues = () => {

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
                        value={values}
                        onChange={(event) => handleChangeValues(event)}
                    />
                </form>
                <nav>
                    <ul>
                        {
                            listBrand.map(item => {
                                return (
                                    <li>
                                        <label className="brand-item--label">
                                            <input
                                                type="checkbox"
                                                name={item}
                                                value={item}
                                                checked={!checked ? false : checkedBrand.includes(item)}
                                                onChange={() => handleChange(item)}
                                                className="brand-item--input" />
                                            <span className="item--name">{item}</span>
                                            <span className="item-count">({staticProducts.filter(product => product.brand === item).length})</span>
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
