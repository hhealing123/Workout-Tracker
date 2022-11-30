import React from 'react'
import Button from './Button'

const Legs = ({addExercise}) => {
    return (
        <div className="card-inner">
            <h2>Legs</h2>
            <p>Squats<Button addExercise={addExercise}/></p>
            <p>Deadlift<Button addExercise={addExercise}/></p>
            <p>Lunges<Button addExercise={addExercise}/></p>
            <p>Hamstring Curls<Button addExercise={addExercise}/></p>
            <p>Leg Extensions<Button addExercise={addExercise}/></p>
        </div>
    )
}

export default Legs