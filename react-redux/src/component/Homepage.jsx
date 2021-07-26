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

    const handleOnClickPageBtn = () => {

    }

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
