import React from 'react'
import { searchProduct } from '../actions/productsAction'
import { useDispatch } from 'react-redux'

const Header = () => {

    const dispatch = useDispatch()

    const searchHendler = (e) => {
        dispatch(searchProduct(e.target.value))
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="navbar-brand">electronic shop</h1>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <form className="form-inline my-2 my-lg-0 ml-auto">
                    <input className="form-control mr-sm-4 w-100" type="search" placeholder="Enter product name" aria-label="Search" onChange={e => searchHendler(e)} />
                </form>
            </div>
        </nav>
    )
}

export default Header
