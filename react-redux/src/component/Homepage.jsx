import React, { useEffect, useState } from 'react'
import Article from './content/article/Article'
import Sidebar from './content/sidebar/Sidebar'
import Header from './header/Header'
import Loading from './content/Loading'


function Homepage() {
    const [products, setProducts] = useState([])
    const [staticProducts, setStaticProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [checked, setChecked] = useState(false);

    const searchProducts = async (text) => {
        setLoading(true);
        await fetch(`http://localhost:3000/products?q=${text}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result)
                    setLoading(false)
                } 
            )
            .catch(
                (error) => {
                    setError(error)
                }       
            )
        console.log(products);
    }

    const renderProductByCategories = (name, payload) => {
        setChecked(true)
    }

    const resetFilter = () => {
        setChecked(false)
    }

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/products`)
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false)
                    setProducts(result)
                    setStaticProducts(result)
                }
            )
            .catch(
                () => {        
                    setError("No results found matching.")
                }
            )
    }, [])

    return (
        <React.Fragment>
            <Header searchProducts = {searchProducts}/>
            <main className = "main-content">
                <Sidebar 
                    staticProducts = {staticProducts}
                    products = {products}
                    checked = {checked}
                    renderProductByCategories = {renderProductByCategories}
                    resetFilter = {resetFilter}
                />
                {loading 
                    ? <Loading /> 
                    : <Article
                        products = {products}
                    />}
            </main>
        </React.Fragment>
    )
}

export default Homepage
