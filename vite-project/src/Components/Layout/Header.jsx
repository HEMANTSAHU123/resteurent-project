import React, { useState } from 'react';
import mealsImage from '../../assets/meals.jpg'; 

import { FaShoppingCart } from 'react-icons/fa'

import './Header.css';

const Header = () => {

  return (
    <>
      <div className='main'>
        <header className='header'>
          <h1>ReactMeals</h1>
       
          <button className='button' > your Cart <span>0</span> <br /><FaShoppingCart/>
          </button>
        </header>
        <div className='image'>
          <img src={mealsImage} alt='A table full of delicious food' /> 
        </div>
      </div>
    </>
  );
};

export default Header;