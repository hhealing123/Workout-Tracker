
import SelectSet from './SelectSet';
import SelectRepsWeight from './SelectRepsWeight';
import { Link } from 'react-router-dom'
import Auth from './utils/auth'
import React, { useRef, useState, useEffect } from 'react';

import { ADD_WORKOUT } from '../components/utils/mutations';
import { useMutation } from '@apollo/client';

const TodaysWorkoutList = () => {
    var storedworkouts = JSON.parse(localStorage.getItem("workouts"));
    const [exercises, setExercises] = useState(storedworkouts);


    // const [formState, setFormState] = useState({ email: '', password: '' });
    const [workout, { error }] = useMutation(ADD_WORKOUT);

    

    const storeWorkout = async (e) => {
        const inputExercises = [];
        for (let i = 0; i < storedworkouts.length; i++) {
            let tempInput={
                workout_name: 'n/a',
                muscles_worked: 'n/a',
                description: 'n/a',
                sets:0,
                reps:0,
                weight:0,
            }
    
            inputExercises.push(tempInput);
            
        }
        console.log(inputExercises);
        e.preventDefault();
        
        try {
            
            await workout({
                exercise: inputExercises ,
            });
            
           
        } catch (e) {
            console.log(e);
        }

    }
    return (
        <div>
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
            <div className='footer2'>
                <Link to="/builder">Go Back</Link>
                <Link to="/dashboard" onClick={storeWorkout} className="link" >Save</Link>

            </div>
        </div>
    )
}

export default TodaysWorkoutList