import React from 'react'
import Button from './Button'

const Chest = ({addExercise}) => {
    return (
        <div className="card-inner">
            <h2>Chest</h2>
            <p className="bench">Bench Press<Button addExercise={addExercise}/></p>
            <p>Chest Fly<Button addExercise={addExercise}/></p>
            <p>Push-Ups<Button addExercise={addExercise}/></p>
            <p>Incline Press<Button addExercise={addExercise}/></p>
            <p>Decline Press<Button addExercise={addExercise}/></p>
        </div>
    )
}

export default Chest