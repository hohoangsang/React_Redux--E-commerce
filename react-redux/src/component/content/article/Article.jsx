import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import Products from './Products'
import Sort from './Sort'

function Article(props) {
    const {
        products,
    } = props;

    const [isChange, setIsChange] = useState(false)

    const handleSortProducts = (event) => {
        setIsChange(true)
        let sort = event.target.value;
        products.sort((a,b) => {
            switch (sort){
                case "asc": 
                    return (a.price - b.price);
                    break;
                case "desc":
                    return (b.price - a.price);
                    break;
                default:
                    return (a.id - b.id)
            }
        })
    }

    useEffect(() => {
        return setIsChange(false)
    }, [isChange])

    return (
        <article  className = "article">
            <Sort handleSortProducts = {handleSortProducts}/>
            <Products products = {products}/>
            <div className = "pagination">
                <Pagination products = {products}/>
            </div>
        </article>
    )
}

export default Article
