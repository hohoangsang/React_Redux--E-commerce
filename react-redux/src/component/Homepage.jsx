import React, { useEffect, useState } from 'react'
import Article from './content/article/Article'
import Sidebar from './content/sidebar/Sidebar'
import Header from './header/Header'
import Loading from './content/Loading'


function Homepage() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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

    return (
        <React.Fragment>
            <Header searchProducts = {searchProducts}/>
            <main className = "main-content">
                <Sidebar />
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
