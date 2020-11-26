import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="content text-center">
                <img src={product.ProductPicUrl} alt="Mountains" width='100' />
                <h4>{product.Name}</h4>
                <h5>₹ {product.Price}</h5>
                <p>{product.Description}</p>
                <p className='text-success'>{product.Status}</p>
            </div>
        </div>
    )
}

export default Product
