import React from 'react'
import './Home.css';
import Product from './Product';

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
          rating = {5} />                           
        </div>

        <div className='home__row'>
          
          <Product 
            title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
            price= {189.99} 
            image = 'https://cdn-tp2.mozu.com/28945-m4/cms/files/L1304200.jpg' 
            rating = {2} />

          <Product 
            title = "Amazon Echo (3rd generation), Smart speaker with Alexa, Charcoal Fabric" 
            price= {99.99} 
            image = 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkChUNn9Ck7uIcK5gDHKPDatMNKaPZ6F0gvtcZQX7hVVPjUgKym-tnmKa8Ez8ectPoXPqtsDK167Gg6AN-O3o_elad7OHPiNo9YPOOu7H5ZiHkyOOZDFr4u4edw-CRYa8ca_9swwo&usqp=CAc' 
            rating = {3} />

          <Product 
            title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
            price= {39.99} 
            image = 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/refurb-ipad-pro-12-wificell-spacegray-2021?wid=2300&hei=2300&fmt=jpeg&qlt=90&.v=1674663709258' 
            rating = {3} />                   
        </div> 

        <div className='home__row'>
       
          <Product 
            title = "Gaming Keyboard, 104 Keys All-Metal Panel, Dacoity Rainbow LED Backlit Quiet Computer Keyboard, Wrist Rest, Multimedia Keys, Anti-ghosting Keys, Waterproof Light Up USB Wired Keyboard for PC Mac Xbox" 
            price= {799.99} 
            image = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnL2MYeqS3GgIJt94zV8SNQ5Qp60gOAFI4wFqgDgGUlYQOPrvaN87qkgBCgNjqj3n_bZSsq6nfAUQ5CriJr5RUMkvmppLJJVIRGwaKeY9FuujbPzF7g3pZtA' 
            rating = {4} />           
        </div>   
    </div>
  );
}

export default Home


