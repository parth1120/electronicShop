import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product/product';
import { productFetch } from '../actions/productsAction'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProductScreen = () => {

    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch()
    const productsStore = useSelector(state => state.userProducts)
    const { products, loading, error } = productsStore
    const pageNumber = useSelector(state => state.userProducts)
    const { pageNo } = pageNumber

    useEffect(() => {
        window.scrollTo({
            top: 1,
            behavior: 'smooth'
        });
    }, [])

    useEffect(() => {
        dispatch(productFetch())
    }, [dispatch])

    useEffect(() => {
        if (!isFetching || pageNo > 4) {
            return;
        }
        const fetchMoreListItems = () => {
            dispatch(productFetch())
            setIsFetching(false);
        }
        fetchMoreListItems();

    }, [isFetching, pageNo, dispatch]);


    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
            if (pageNo < 4) {
                setIsFetching(true);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pageNo]);

    return (
        <div className='col-sm-12 col-md-10 main-container'>
            <div className="list-group sticky-top sticky-offset-margin">
                <h1 className='mt-4'>Products</h1>
                <div className="row">
                    {products.length > 0 && products.map(product => (
                        <Product key={product.Name} product={product} />
                    ))}
                </div>
                {loading ? <Loader /> : null}
                {error ? <Message>{'Server Error'}</Message> : null}
            </div>
        </div>
    )
}

export default ProductScreen
