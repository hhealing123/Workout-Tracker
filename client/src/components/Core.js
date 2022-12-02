import React from 'react'
import Button from './Button'

const Core = ({addExercise}) => {
    return (
        <div className="card-inner">
            <h2>Core</h2>
            <p>Bicycle Crunch<Button addExercise={addExercise}/></p>
            <p>Leg Raises<Button addExercise={addExercise}/></p>
            <p>Oblique Crunch<Button addExercise={addExercise}/></p>
            <p>Reverse Crunch<Button addExercise={addExercise}/></p>
            <p>Russian Twist<Button addExercise={addExercise}/></p>
        </div>
    )
}

export default Core