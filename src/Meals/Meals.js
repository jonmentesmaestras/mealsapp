import { Fragment } from 'react'
import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <Fragment>
        <MealsSummary></MealsSummary>
        <AvailableMeals></AvailableMeals>
    </Fragment>
  )
}

export default Meals