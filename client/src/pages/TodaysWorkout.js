import React from 'react';
import TodaysWorkoutList from '../components/TodaysWorkoutList';

const TodaysWorkout = () => {
  return (
    <div>
         <h1 className='header peak'>Today's Workout</h1>
        <TodaysWorkoutList />
    </div>
  )
}

export default TodaysWorkout