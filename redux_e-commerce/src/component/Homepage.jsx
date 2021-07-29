import React, { useEffect, useState } from 'react'
import Article from './content/article/Article'
import Sidebar from './content/sidebar/Sidebar'
import Header from './header/Header'
import Loading from './content/Loading'

import { useSelector, useDispatch } from 'react-redux'
import {
    getAllProductsRequest,
    getFilterProductsRequest
} from '../redux/action/ProductsAction'


function Homepage() {
    const [products, setProducts] = useState([])
    const [staticProducts, setStaticProducts] = useState([])
    const [error, setError] = useState(null)
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const loading = useSelector(state => state.products.loading)

    useEffect(() => {
        dispatch(getAllProductsRequest())
    }, [dispatch])

    useEffect(() => {
        dispatch(getFilterProductsRequest())   
    }, [dispatch, filter])

    const searchProducts = async (text) => {
        console.log(filter)
        const url=`http://localhost:3000/products?q=${text}`
        await fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                } 
            )
            .catch(
                (error) => {
                    setError(error)
                }       
            )
    }

    const handleClickPrice = (price) => {
        const filterPrices = products.filter(item => item.price_range === price);
        setProducts(filterPrices);
        setChecked(true);
    }

    const handleSubmitPrices = (first, last) => {
        if(first === '' && last === ''){
            return (setProducts(staticProducts),
                    setChecked(true)
            )
        } else {
            const filterPrices = staticProducts.filter(item => {
                return ((item.price >= first) && (item.price <= last))
            })
            return (
                setProducts(filterPrices),
                setChecked(true)
            )
        }
    }

    const handleOnClickPageBtn = async (page) => {
        await fetch(`http://localhost:3000/products?_page=${page}&_limit=16`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                }
            )
            .catch(
                (error) => {
                    setError(error)
                }
            )
    }

    return (
        <React.Fragment>
            <Header searchProducts = {searchProducts}/>
            <main className = "main-content">
                <Sidebar 
                    staticProducts = {staticProducts}
                    products = {products}
                    checked = {checked}
                    handleClickPrice ={handleClickPrice}
                    handleSubmitPrices = {handleSubmitPrices}
                />
                {loading 
                    ? <Loading /> 
                    : <Article
                        products = {products}
                        staticProducts = {staticProducts}
                        handleOnClickPageBtn = {handleOnClickPageBtn}
                    />}
            </main>
        </React.Fragment>
    )
}

export default Homepage