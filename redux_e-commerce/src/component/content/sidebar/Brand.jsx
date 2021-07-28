import React, { useState, useEffect } from 'react'
import { getListFilter } from '../../../util';

function Brand(props) {
    const {
        staticProducts,
        checked,
        filterBrand
    } = props

    const [checkedBrand, setCheckedBrand] = useState([]);
    const [values, setValues] = useState("");
    const [isChange, setIsChange] = useState(false);

    const listBrand = getListFilter(staticProducts, "brand")

    useEffect(() => {
        if(!checked){
            setCheckedBrand([])
        }
        return setIsChange(false)
    }, [checked, isChange])


    const setUpCheckedBrand = (values) => {
        let newArray = checkedBrand;
        let find = newArray.indexOf(values);
        if (find > -1) {
            newArray.splice(find, 1);
        } else {
            newArray.push(values);
        }

        console.log(newArray)
        return setCheckedBrand(newArray);
    }


    const handleChange = (name) => {
        setIsChange(true)
        setUpCheckedBrand(name)
        filterBrand(checkedBrand, "brand");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUpCheckedBrand(values);
        filterBrand(checkedBrand, "brand");
        setValues("");
    }

    const handleChangeValues = (event) => {
        setValues(event.target.value);
        console.log(values);
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
                            listBrand.map((item, key) => {
                                return (
                                    <li key = {key}>
                                        <label className="brand-item--label">
                                            <input
                                                type="checkbox"
                                                name={item}
                                                value={item}
                                                checked={checkedBrand.includes(item)}
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
