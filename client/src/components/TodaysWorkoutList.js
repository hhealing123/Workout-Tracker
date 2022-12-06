import React, { useState } from 'react';
import SelectSet from './SelectSet';
import SelectRepsWeight from './SelectRepsWeight';


// const workoutArray = [
//     "Push-Ups", "Chest Press", "Incline Press", "Pull-Ups", "Upright Row", "Leg Raises", "Russian Twist"
// ]

const TodaysWorkoutList = () => {

    const [exercises, setExercises] = useState([
        {
            "name": "Bench Press",
            "addRow": false,
            "numberOfSets": 1
        },
        {
            "name": "Chest Fly",
            "addRow": false,
            "numberOfSets": 1
        },
        {
            "name": "Push-Ups",
            "addRow": false,
            "numberOfSets": 1
        },        {
            "name": "Incline Press",
            "addRow": false,
            "numberOfSets": 1
        },
        {
            "name": "Decline Press",
            "addRow": false,
            "numberOfSets": 1
        },
        // {
        //     "name": "Bicycle Crunch",
        //     "addRow": false,
        //     "numberOfSets": 1
        // },
        // {
        //     "name": "Leg Raises",
        //     "addRow": false,
        //     "numberOfSets": 1
        // },
        // {
        //     "name": "Oblique Crunch",
        //     "addRow": false,
        //     "numberOfSets": 1
        // },
        // {
        //     "name": "Reverse Crunch",
        //     "addRow": false,
        //     "numberOfSets": 1
        // },
        // {
        //     "name": "Russian Twist",
        //     "addRow": false,
        //     "numberOfSets": 1
        // },
    ]);

    return (
        <div className="card-inner-today">
            {exercises.map((exercise, i) => (
                <>
                    <div className='sleeve'>
                        <p>{exercise.name}</p> <SelectSet exercises={exercises} setExercises={setExercises} i={i} /> <SelectRepsWeight /> 
                        {exercise.numberOfSets === 2 ? <><SelectRepsWeight /></> : exercise.numberOfSets === 3 ? <><SelectRepsWeight /><SelectRepsWeight /></> : exercise.numberOfSets === 4 ? <><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /></> : exercise.numberOfSets === 5 ? <><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /><SelectRepsWeight /></> : ""}
                    </div>
                </>
            ))}
        </div>
    )
}

export default TodaysWorkoutList