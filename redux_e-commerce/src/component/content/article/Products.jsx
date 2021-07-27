import React from 'react'

function Products(props) {
    const {
        products
    } = props

    return (
        <div className="products">
            {products.map((product) => {
                return (
                    <div key={product.id} className="products-item">
                        <div className="products-item__img">
                            <img src={product.image} alt="product image" />
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
