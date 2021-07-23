import React, { useState } from 'react'

function Type(props) {
    const {
        staticProducts,
        checked
    } = props

    const [checkedType, setCheckedType] = useState([])

    let productsType = staticProducts.map(item => item.type);
    productsType = [...new Set(productsType)].sort();

    const handleChange = (name) => {
        let arrayType = checkedType;
        let find = arrayType.indexOf(name);
        if (find > -1){
            arrayType.splice(find, 1);
        } else {
            arrayType.push(name);
        }

        setCheckedType(arrayType)
    }

    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Type</h4>
            <div className="filter__categories__type">
                <nav>
                    <ul>
                        {
                            productsType.map((item, index) => {
                                return (
                                    <li>
                                        <label className="type-item--label">
                                            <input
                                                type="checkbox"
                                                name={item}
                                                value={item}
                                                checked={!checked ? false : checkedType.includes(item)}
                                                onChange={() => handleChange(item)}
                                                className="type-item--input" />
                                            <span className="item-name">{item}</span>
                                            <span className="item-count">({staticProducts.filter(product => product.type == item).length})</span>
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
