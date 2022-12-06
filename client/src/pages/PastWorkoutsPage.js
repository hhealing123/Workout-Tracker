import React from 'react'
import PastWorkouts from '../components/PastWorkouts'
import { Link } from 'react-router-dom';

const PastWorkoutsPage = () => {
    return (
        <div>
            <h1 className='header'>Workout History</h1>
            <PastWorkouts />
            <div className='footer2'>
                <Link to="/dashboard">Go Back</Link>
            </div>
        </div>
    )
}

export default PastWorkoutsPage