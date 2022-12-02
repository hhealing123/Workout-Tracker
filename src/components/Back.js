import React from 'react'
import Button from './Button'

const Back = ({addExercise}) => {
  return (
    <div className="card-inner">
      <h2>Back</h2>
      <p>Pull-Ups<Button addExercise={addExercise}/></p>
      <p>Pull-Downs<Button addExercise={addExercise}/></p>
      <p>Bend-Over Row<Button addExercise={addExercise}/></p>
      <p>Upright Row<Button addExercise={addExercise}/></p>
      <p>Back Extension<Button addExercise={addExercise}/></p>
    </div>
  )
}

export default Back