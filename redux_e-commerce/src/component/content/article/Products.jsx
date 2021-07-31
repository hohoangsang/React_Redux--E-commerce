import React from 'react'
import { useSelector } from 'react-redux'

function Products() {
    const { filterData } = useSelector(state => state.products);

    if(filterData.length === 0) {
        return (
            <div>
                <h2 style ={{marginLeft: "2rem"}}>No Product Match</h2>
            </div>
        )
    }

    return (
        <div className="products">
            {filterData.map((product, key) => {
                return (
                    <div key = {key} className="products-item">
                        <div className="products-item__img">
                            <img src={product.image} alt="" />
                        </div>
                        <div className="products-item__name">
                            <h4>{product.name}</h4>
                        </div>
                        <div className="products-item__bottom">
                            <div className="products-item__rating">
                                {[...Array(product.rating)].map(() => {
                                    return <span className="fa fa-star checked"></span>
                                })}
                                {[...Array((5 - product.rating))].map(() => {
                                    return <span className="fa fa-star"></span>
                                })}
                            </div>
                            <div className="products-item__price">
                                <span>${product.price}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
