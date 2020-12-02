import { ADD_CART, FILTER_PRODUCT, PRICE_FILTER_PRODUCT, PRODECT_LIST_FAIL, PRODECT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, SEARCH_PRODUCT } from '../constants/productConstants'
import { getData } from '../utils/axios';

export const productFetch = () => async (dispatch, getState) => {
    dispatch({ type: PRODUCT_LIST_REQUEST })
    await getData((getState().userProducts.pageNo))
        .then(res => {
            dispatch({
                type: PRODECT_LIST_SUCCESS,
                payload: res.data,
                pageNo: getState().userProducts.pageNo + 1
            })
        })
        .catch(error => {
            dispatch({
                type: PRODECT_LIST_FAIL,
                payload: true
            })
        })
};

export const searchProduct = (searchText) => (dispatch) => {
    dispatch({
        type: SEARCH_PRODUCT,
        searchText: searchText,
    })
}

export const filterProduct = (category) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCT,
        category: category,

    })
}

export const priceFilterProduct = (maxMin) => (dispatch) => {
    dispatch({
        type: PRICE_FILTER_PRODUCT,
        range: maxMin,

    })
}

export const addCart = (productDetail) => (dispatch) => {
    dispatch({
        type: ADD_CART,
        item: productDetail
    })
}