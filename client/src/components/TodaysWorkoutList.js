import React from 'react';
import SelectSet from './SelectSet';
import SelectReps from './SelectReps';
import SelectWeight from './SelectWeight';


const workoutArray = [
    "Push-Ups", "Chest Press", "Incline Press", "Pull-Ups", "Upright Row", "Leg Raises", "Russian Twist"
]

const TodaysWorkoutList = () => {
    return (
        <div className="card-inner-today">
            {workoutArray.map((workout, i) => (
                <div className='sleeve'>
                   <p>{workout}</p> <SelectSet /> <SelectReps /> <SelectWeight />
                </div>
            ))}
        </div>
    )
}

export default TodaysWorkoutList