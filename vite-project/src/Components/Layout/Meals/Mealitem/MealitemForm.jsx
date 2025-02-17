import React from 'react'
import Input from '../../UI/Input'
import './MealitemForm.css'
const MealitemForm = () => {
  return (
   <form className='form'>
    <Input label='Amount' input={{
      id:'Amount',
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1'
    }}/>
    <button className='btn'>+add</button>
   </form>
  )
}

export default MealitemForm
