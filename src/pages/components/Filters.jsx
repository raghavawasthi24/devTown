import React from 'react'
import RangeSelector from '../../styledComponents/RangeSelector'

const Filters = () => {
  return (
    <div className='p-6'>
        <div>
            <p className='text-gray-500 font-bold'>PRICE RANGE</p>
            <RangeSelector type="range" min="1" max="100" class="slider" id="myRange"/>
        </div>
        <div>
            <p className='text-gray-500 font-bold'>CATEGORIES</p>
        </div>
    </div>
  )
}

export default Filters