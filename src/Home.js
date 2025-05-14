import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
        <img className='home__image' 
        src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
       </div>

       <div className='home__row'>
        
        <Product 
          title = "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
          price= {19.99} 
          image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
          rating = {4} />  

        <Product 
          title = "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
          price= {239.99} 
          image = 'https://s3-eu-west-1.amazonaws.com/media.markselectrical.co.uk/item-images/zoom/0W20011391.jpg' 
          rating = {3} />                           
        </div>

        <div className='home__row'>
          
          <Product 
            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
            price= {189.99} 
            image = 'https://m.media-amazon.com/images/I/81QEJYyspjL._AC_UF894,1000_QL80_.jpg' 
            rating = {3} />

          <Product 
            title = "Amazon Echo (3rd generation), Smart speaker with Alexa, Charcoal Fabric" 
            price= {99.99} 
            image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYn2xaF1fUPgpw12_3pCnA0ADoB9iIHdFYVQ&s' 
            rating = {5} />

          <Product 
            title = "Gaming Keyboard, 104 Keys All-Metal Panel, Dacoity Rainbow LED Backlit Quiet Computer Keyboard, Wrist Rest, Multimedia Keys, Anti-ghosting Keys, Waterproof Light Up USB Wired Keyboard for PC Mac Xbox" 
            price= {39.99} 
            image = 'https://m.media-amazon.com/images/I/71TiZRp+8SL._AC_UF894,1000_QL80_.jpg' 
            rating = {3} />                   
        </div> 

        <div className='home__row'>
       
          <Product 
            title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
            price= {799.99} 
            image = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-ipad-pro-12-wificell-spacegray-2021?wid=2300&hei=2300&fmt=jpeg&qlt=90&.v=1674663709258' 
            rating = {4} />           
        </div>   
    </div>
  );
}

export default Home


