import {fragment} from 'react'
import MealSummary from './MealSummary'
import AvailableMeal from '../AvailableMeal'
const Meals = () => {
  return (
    <fragment>
      <MealSummary/>
      <AvailableMeal/>
    </fragment>
  )
}

export default Meals
