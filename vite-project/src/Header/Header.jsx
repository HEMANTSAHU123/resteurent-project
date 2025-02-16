import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='main'>
      <header className='header'>
        <h1>ReactMeals</h1>
        <button className='button'>Your cart <span>o</span></button>
      </header>
      <div className="header-contents">
        <h1>Delicious Food, delivered to you</h1>
     
       <p>Choose your favourite meal from your broad selection of available meal and 
        joy out delicioud food 
          lunch at home </p>
          <p>All our meal are cooked with highly infradient
          ,just in time and ofcourse by experience chefs</p>
   </div>
    </div>
  )
}

export default Header
