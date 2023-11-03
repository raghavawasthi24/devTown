import React from 'react'
import Button from '@mui/material/Button';
import {products} from '../constants/products';
import Card from '../styledComponents/Card';
import ItemCard from './components/ItemCard';
import Filters from './components/Filters';

const Home = () => {
  return (
    <div className='home'>
       <div className="text-2xl font-bold text-white bg-orange-300 py-10 px-6 ">
          Products
       </div>
       <div className='flex'>
          <div className='w-1/4'>
             <Filters/>
          </div>
          <div className='w-3/4 flex flex-wrap'>
               {
                  products.map((product)=>{
                    console.log(product)
                    return(
                      <ItemCard img={product.images[0]} title={product.title} price={product.price} description={product.description}/>
                    )
                    
                    // <Card> </Card>
                  })
               }
          </div>

       </div>
    </div>
  )
}

export default Home