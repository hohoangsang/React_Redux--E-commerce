import React from 'react'

function Pagination(props) {
    const {
        products,
        staticProducts,
        handleOnClickPageBtn
    } = props;

    const pagesLength = Math.ceil(staticProducts.length/16);

    const renderPageBtn = (length) => {
        let btns = []
        for(let i = 1; i <= length; i++){
            let btn = (
                <li className = {"page-item"} key={i} onClick = {() => handleOnClickPageBtn()}>
                    {i}
                </li>
            )
            btns.push(btn);
        }
        return btns;
    }

    return (
        <div className="pagination">
            <nav>
                <ul>
                    <li id="prev"><i className="fal fa-chevron-left" onClick = {() => handleOnClickPageBtn()}></i> Prev</li>
                    {renderPageBtn(pagesLength)}
                    <li id="next" onClick = {() => handleOnClickPageBtn()}>Next <i className="fal fa-chevron-right"></i></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination

