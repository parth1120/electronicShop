import React from 'react'
import Button from '../Button'
import { addCart } from '../../actions/productsAction'
import { useDispatch } from 'react-redux'

const Product = ({ product }) => {

    const dispatch = useDispatch()

    const submitHandler = (product) => {
        dispatch(addCart(product))
        // console.log('cart', product);
    }
    return (
        <div className="col-sm-12 col-md-3">
            <div className="content text-center">
                {product.Quantity > 20 && <div className='star'>
                    ★
                </div>}
                <img src={product.ProductPicUrl} alt="Mountains" width='100' />
                <h4>{product.Name}</h4>
                <h5>{product.CurrencyCode === 'EUR' ? '€' : ''} {product.Price}</h5>
                <p>{product.Description}</p>
                <p>{product.Quantity}</p>
                <p className='text-success'>{product.Status}</p>
                <Button click={(e) => submitHandler(product)} />
            </div>
        </div>
    )
}

export default Product
