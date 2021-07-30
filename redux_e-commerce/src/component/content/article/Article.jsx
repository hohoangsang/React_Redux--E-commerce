import React, { useState } from 'react'
import Pagination from './Pagination'
import Products from './Products'
import Sort from './Sort'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

function Article(props) {
    const {
        products,
        staticProducts,
        handleOnClickPageBtn
    } = props;

    const { loading } = useSelector(state => state.products)

    return (
        <article  className = "article">
            <Sort />
            {
                loading 
                    ? <Loading></Loading>
                    : <Products products = {products}/>
            }
            <div className = "pagination">
                <Pagination />
            </div>
        </article>
    )
}

export default Article
