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
    }

    const filterProducts = (array, option) => {
        if(array.length > 0){
            let productFilter = staticProducts.filter(item => {
                switch (option){
                    case "type":
                        return array.includes(item.type);
                        break;
                    case "brand":
                        return array.includes(item.brand);
                        break;
                    default:
                }
            })
            setChecked(true);
            setProducts(productFilter);
        } else {
            setProducts(staticProducts)
        }
    }

    const renderProductByCategories = async (name, payload) => {
        setChecked(true);
        setLoading(true);
        await fetch(`http://localhost:3000/products?${payload}_like=${name}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setProducts(result);
                    setLoading(false)
                }
            )
            .catch(
                (error) => {
                    setError(error)
                }       
            )
    }

    const resetFilter = () => {
        setChecked(false)
        setProducts(staticProducts)
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
                    filterType = {filterProducts}
                    filterBrand = {filterProducts}
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
