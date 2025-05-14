/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
//import { useStateValue } from './StateProvider';

function Header() {
   //const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className = 'header'>
      <Link to = "/">
      <img 
          className='header_logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>
      
        <div className='header__search'>
          <input className='header__searchInput' type='text' />
          <SearchIcon className='header_searchIcon' />
        </div>
        <div className='header__nav'>

          <div className='header__option'> 
            <span className='header__optionLineOne'>Hello </span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>  
          </div>

          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>   
          </div>

          
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        
             
        </div>
    </div>
  )
}

export default Header
