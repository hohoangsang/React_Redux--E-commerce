import React from 'react'
import Pagination from './Pagination'
import Products from './Products'
import Sort from './Sort'

function Article() {
    return (
        <article  className = "article">
            <Sort />
            <Products />
            <div className = "pagination">
                <Pagination />
            </div>
        </article>
    )
}

export default Article
