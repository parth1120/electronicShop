
import { FILTER_PRODUCT, PRICE_FILTER_PRODUCT, PRODECT_LIST_FAIL, PRODECT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, SEARCH_PRODUCT } from '../constants/productConstants'

const initialState = {
    products: [],
    searchableProducts: [],
    pageNo: 0,
    category: 'all'
}

export const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case PRODECT_LIST_SUCCESS:
            let products = [...state.products, ...action.payload]
            products = products.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.Name === thing.Name
                ))
            )
            return {
                ...state,
                loading: false,
                products: products,
                searchableProducts: products,
                pageNo: action.pageNo,
                error: false
            }
        case PRODECT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                products: state.searchableProducts.filter(e => e.Name.toLowerCase().includes(action.searchText.toLowerCase())),
                category: null,
            }
        case FILTER_PRODUCT:
            return {
                ...state,
                category: action.category.toLowerCase(),
                products: state.searchableProducts.filter(e => action.category.toLowerCase() === 'all' ? state.searchableProducts : e.Category.toLowerCase() === action.category.toLowerCase()),
            }
        case PRICE_FILTER_PRODUCT:
            return {
                ...state,
                products: state.searchableProducts.filter(product => product.Price >= action.range.min && product.Price <= action.range.max),
                category: null,
            }
        default:
            return state
    }
}