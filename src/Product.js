import React from 'react'
import "./Product.css"
//import { useStateValue } from './StateProvider'
import reducer from './reducer.js'

function Product({title, image, price, rating}) {
  //const [{basket}, dispatch] = useStateValue();

 
 

  return (
    <div 
    className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='product__rating'>
              {Array(rating).fill().map((_, i)=>(
                <p>⭐</p>
              ))}
              
            </div>
        </div>

        <img src={image} alt="Product" />
  <button onClick={() => console.log('Add to Basket clicked')}>
    Add to Basket
  </button>      
    </div>

  )
}

export default Product
