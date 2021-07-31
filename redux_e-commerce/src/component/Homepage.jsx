import React, { useEffect } from 'react'
import Article from './content/article/Article'
import Sidebar from './content/sidebar/Sidebar'
import Header from './header/Header'

import { useSelector, useDispatch } from 'react-redux'
import {
    getAllProductsRequest,
    getFilterProductsRequest
} from '../redux/action/ProductsAction'


function Homepage() {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(getAllProductsRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(getFilterProductsRequest())   
    }, [dispatch, filter])

    return (
        <React.Fragment>
            <Header />
            <main className = "main-content">
                <Sidebar /> 
                <Article />
            </main>
        </React.Fragment>
    )
}

export default Homepage