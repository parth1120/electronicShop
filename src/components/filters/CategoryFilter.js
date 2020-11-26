import React from 'react'
import { filterProduct } from '../../actions/productsAction'
import { useDispatch, useSelector } from 'react-redux'

function CategoryFilter() {
    const dispatch = useDispatch()

    const filterValue = useSelector(state => state.userProducts)
    const { category } = filterValue

    return (
        <div id="row" >
            <button className={`btn ${category === 'all' && 'active'} col-12`} onClick={() => dispatch(filterProduct('all'))}> Show all</button>
            <button className={`btn ${category === 'laptops' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Laptops'))}> Laptops</button>
            <button className={`btn ${category === 'accessories' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Accessories'))}> Accessories</button>
            <button className={`btn ${category === 'flat screen monitors' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Flat Screen Monitors'))}> Flat Screen Monitors</button>
            <button className={`btn ${category === 'printers' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Printers'))}> Printers</button>
            <button className={`btn ${category === 'mousepads' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Mousepads'))}> Mousepads</button>
            <button className={`btn ${category === 'graphic cards' && 'active'} col-12`} onClick={() => dispatch(filterProduct('Graphic Cards'))}> Graphic Cards</button>
        </div>
    )
}

export default CategoryFilter
