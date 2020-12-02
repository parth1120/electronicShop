import React from 'react'

const Button = (props) => {
    return (
        <div className='btn btn-primary' onClick={props.click}>Add to cart</div>
    )
}

export default Button
