import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterPage } from '../../../redux/action/FilterAction';

function Pagination() {
    const { total } = useSelector(state => state.products)
    const { _page, _limit } = useSelector(state => state.filter)
    const dispatch = useDispatch();

    const pagesLength = Math.ceil(total/_limit);

    if(!pagesLength){
        return null
    }

    const handleOnClickPageBtn = (_page) => {
        dispatch(filterPage(_page))
    }       

    const renderPageBtn = (length) => {
        let btns = []
        for(let i = 1; i <= length; i++){
            let btn = (
                <li className = {`page-item ${_page === i ? "active" : ""}`} key={i} onClick = {() => handleOnClickPageBtn(i)}>
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
                    <li id="prev" className = {_page === 1 ? "disable" : ""} onClick = {() => handleOnClickPageBtn(_page - 1)}><i className="fal fa-chevron-left"></i> Prev</li>
                    {renderPageBtn(pagesLength)}
                    <li id="next" onClick = {() => handleOnClickPageBtn(_page + 1)} className = {_page === pagesLength ? "disable" : ""}>Next <i className="fal fa-chevron-right"></i></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination

