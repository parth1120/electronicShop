import React from 'react'
import CategoryFilter from './filters/CategoryFilter'
import PriceFilter from './filters/PriceFilter'

const Sidebar = () => {
    return (
        <div className='sidebar col-md-2'>
            <div className="list-group sticky-top sticky-offset">
                <div className='mt-3'>
                    <h5 className='text-light'>Category Filters</h5>
                    <CategoryFilter />
                </div>
                <div>
                    <h5 className='text-light mb-5 mt-4'>Price Filters</h5>
                    <div className='px-3'>
                        <PriceFilter />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Sidebar
