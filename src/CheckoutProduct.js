import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image, title, price, rating}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove items from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      title: title,
      
    })
  }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
         <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
       
      </div>
    </div>
  )
}

export default CheckoutProduct
