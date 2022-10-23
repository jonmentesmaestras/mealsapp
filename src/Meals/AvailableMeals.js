import React from 'react'
import './dummy-meals.js'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from './dummy-meals.js'
import Card from '../UI/Card.js'
import MealItem from './MealItem/MealItem.js'

const AvailableMeals = () => {
  
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map(  meal => <MealItem 
                                      key={meal.id}
                                      id = {meal.id}
                                      name={meal.name} 
                                      description={meal.description}
                                      price = {meal.price}

                                      ></MealItem>
          )}
        </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals