import React, { useState, useEffect } from 'react'
import { getListFilter } from '../../../util';

function Type(props) {
    const {
        staticProducts,
        checked,
        filterType
    } = props

    const [checkedType, setCheckedType] = useState([])
    const [isChange, setIsChange] = useState(false)

    const listType = getListFilter(staticProducts, "type")

    useEffect(() => {
        if (!checked) {
            setCheckedType([])
        }
        return setIsChange(false)
    }, [checked, isChange])

    const handleChange = (name) => {
        setIsChange(true)
        let arrayType = checkedType;
        let find = arrayType.indexOf(name);
        if (find > -1) {
            arrayType.splice(find, 1);
        } else {
            arrayType.push(name);
        }

        setCheckedType(arrayType)
        filterType(checkedType, "type")
    }

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
                                                checked={checkedType.includes(item)}
                                                className="type-item--input" 
                                            />
                                            <span className="item-name">{item}</span>
                                            <span className="item-count">({staticProducts.filter(product => product.type === item).length})</span>
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
