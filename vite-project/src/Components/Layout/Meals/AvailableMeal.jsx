import React from 'react'
import Card from '../UI/Card'
import Mealitem from './Mealitem/Mealitem'
import './AvailableMeal.css'
const dummyMeals=[{
    id:'m1',
    name:'shushi',
    description:'finest fish and vegis',
    price:22.99
},
{
id:'m2',
name:'shnitzel',
description:'a german speciality',
price:16.50
},
{
id:'m3',
name:'Barbecue burger',
description:'Americsn raw maety',
price:70.50
},
{
id:'m4',
name:'green bowl',
description:'green bowl',
price:16.50
}
]
const AvailableMeal = () => {
  const mealList=dummyMeals.map((meal)=>
  <Mealitem 
  key={meal.key}
  name={meal.name}
  description={meal.description}
  price={meal.price}
  />
  )
  return (
   
   <section className='meals'>
    <Card>
    <ul>{mealList}</ul>
    </Card>
   </section>
 
)
}

export default AvailableMeal
