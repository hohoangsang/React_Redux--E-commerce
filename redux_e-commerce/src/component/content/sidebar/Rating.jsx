import React from 'react'

function Rating(props) {
    const {
        products,
        checked
    } = props

    const ratingArr = [4, 3, 2, 1]

    return (
        <div className="filter__categories__item">
            <h4 className="filter__categories__item-title">Rating</h4>
            <div className="filter__categories__rating">
                <nav>
                    <ul>    
                        {ratingArr.map((item, key) => {
                            return (
                                <li key = {key}>
                                    {[...Array(item)].map(() => {
                                        return <span className="fa fa-star checked star-item"></span>
                                    })}
                                    {[...Array((5 - item))].map(() => {
                                        return <span className="fa fa-star unchecked star-item"></span>
                                    })}
                                    <span className="star-rating-count"> &amp; Up {products.filter(product => product.rating == item).length}</span>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
            </div>
        </div>
    )
}

export default Rating
