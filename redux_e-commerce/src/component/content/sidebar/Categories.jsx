import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {filterCategories, filterSubCategories, filterClear } from '../../../redux/action/FilterAction'

function Categories() {
    const [activeCategories, setActiveCategories] = useState(null)
    const [activeSubCategories, setActiveSubCategories] = useState(null)
    const allProducts = useSelector(state => state.products.allData)
    const dispatch = useDispatch()

    const resetFilter = () => {
        setActiveSubCategories(null)
        setActiveCategories(null)
        dispatch(filterClear())
    }

    const handleClickCategories = (name) => {
        setActiveSubCategories(null)
        setActiveCategories(name);
        dispatch(filterCategories(name))
    }

    const handleClickSubCategories = (event, name, child) => {
        event.stopPropagation();
        setActiveCategories(name)
        setActiveSubCategories(child);
        dispatch(filterCategories(name))
        dispatch(filterSubCategories(`${name} > ${child}`))
    }

    const getCategoriesData = () => {
        let categoriesData = {};
        for (let item of allProducts) {
            if (!categoriesData[item.hierarchicalCategories.lvl0]) {
                categoriesData[item.hierarchicalCategories.lvl0] = {
                    name: item.hierarchicalCategories.lvl0,
                    child: {},
                }
            }

            if (!item.hierarchicalCategories.lvl1) continue;
            let subCategory = item.hierarchicalCategories.lvl1.split("> ")[1];
            categoriesData[item.hierarchicalCategories.lvl0].child[subCategory] = subCategory;
        }

        return categoriesData
    }

    const renderCategories = () => {
        const categoriesData = getCategoriesData();  
        let categoriesView = Object.keys(categoriesData).map((key, index) => {
            return (
                <li
                    className={`hierarchical-menu--item ${categoriesData[key].name === activeCategories && "hierarchical-menu--item__active"}`}
                    key={key}
                    onClick = {() => handleClickCategories(categoriesData[key].name)}
                >
                    <span className = "title--lv0">
                        <i className="fa fa-angle-right"></i> {categoriesData[key].name}
                    </span>
                    {Object.keys(categoriesData[key].child).length > 0 && (
                        <ul className="hierarchical-menu--list__lvl1" style = {{display: (categoriesData[key].name === activeCategories) ? "block" : "none"}}>
                            {Object.keys(categoriesData[key].child).map((childKey, childIndex) => {
                                return (
                                    <li
                                        className={`hierarchical-menu--item ${categoriesData[key].child[childKey] === activeSubCategories && "hierarchical-menu--item__active"}`}
                                        key = {childKey}
                                        onClick = {(event) => handleClickSubCategories(event, categoriesData[key].name, categoriesData[key].child[childKey])}
                                    >
                                        <span  className = "title--lv1">
                                            <i className="fa fa-angle-right"></i> {categoriesData[key].child[childKey]}
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                </li>
            )
        })

        return categoriesView;
    }

    return (
        <div className="filter__category">
            <div className="clear-filter-btn">
                <button onClick = {() => resetFilter()}><i className="fas fa-eraser"></i> Clear all filter</button>
            </div>
            <div>
                <h2 className="categories__title">Show result for</h2>
            </div>
            <div className="filter__category__content">
                <ul className="hierarchical-menu--list__lvl0">
                    {renderCategories()}
                </ul>
            </div>
        </div>
    )
}

export default Categories
