import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { productsReducers } from './reducers/productsReducer'

const reduces = combineReducers({
    userProducts: productsReducers,
})

const middelware = [thunk]

const store = createStore(
    reduces,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store