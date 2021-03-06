import React from 'react'
import Pagination from './Pagination'
import Products from './Products'
import Sort from './Sort'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

function Article() {
    const { loading } = useSelector(state => state.products)

    if(loading){
        return <Loading />
    }

    return (
        <article  className = "article">
            <Sort />
            <Products/>
            <div className = "pagination">
                <Pagination />
            </div>
        </article>
    )
}

export default Article
