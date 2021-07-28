import React, { useEffect, useState } from 'react'
import Article from './content/article/Article'
import Sidebar from './content/sidebar/Sidebar'
import Header from './header/Header'
import Loading from './content/Loading'
import productsApi from '../api/productsApi'


function Homepage() {
    const [products, setProducts] = useState([])
    const [staticProducts, setStaticProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [checked, setChecked] = useState(false);
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 16,
        q:""
    })

    useEffect(() => {
        setLoading(true)
        const getProductsFromApi = async () => {
            try {
                const response = await productsApi.getAll();
                setProducts(response);
                setStaticProducts(response);
                setLoading(false);
            } catch (error) {   
                console.log("Failed to get products from API", error)
            }
        }

        getProductsFromApi()
    }, [])

    const searchProducts = async (text) => {
        setLoading(true);
        setFilter({
            ...filter,
            q: text
        })
        console.log(filter)
        const url=`http://localhost:3000/products?q=${text}`
        await fetch(url)
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

    const handleOnClickPageBtn = async (page) => {
        setLoading(true)
        await fetch(`http://localhost:3000/products?_page=${page}&_limit=16`)
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
