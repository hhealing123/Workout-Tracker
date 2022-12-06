import React, { useState } from 'react';
import SelectSet from './SelectSet';
import SelectRepsWeight from './SelectRepsWeight';


// const workoutArray = [
//     "Push-Ups", "Chest Press", "Incline Press", "Pull-Ups", "Upright Row", "Leg Raises", "Russian Twist"
// ]

const TodaysWorkoutList = () => {
    var storedworkouts = JSON.parse(localStorage.getItem("workouts"));
    console.log(storedworkouts);
    const [exercises, setExercises] = useState(storedworkouts);

    return (
        <div className="card-inner-today">
            {exercises.map((exercise, i) => (
                <>
                    <div className='sleeve'>
                        <p>{exercise}</p> <SelectSet exercises={exercises} setExercises={setExercises} i={i} /> <SelectRepsWeight /> 
                        {exercise.numberOfSets === 2 ? <><SelectRepsWeight /></> : exercise.numberOfSets === 3 ? <><SelectRepsWeight /><SelectRepsWeight /></> : exercise.numberOfSets === 4 ? <><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /></> : exercise.numberOfSets === 5 ? <><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /></> : ""}
                    </div>
                </>
            ))}
        </div>
    )
}

export default TodaysWorkoutList