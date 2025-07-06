import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

        <div>
          <h3>{user?.email ? `Hello, ${user.email}` : 'Hello, Guest'}</h3>

            <h2 className='checkout__title'>Your shopping Basket</h2>

            {basket.map(item => (
              <CheckoutProduct
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
              />
            ))}
            {/*Item*/}
            {/*Item*/}
            {/*Item*/}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
