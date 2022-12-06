import React from 'react';
import TodaysWorkoutList from '../components/TodaysWorkoutList';
import { Link } from 'react-router-dom';

const TodaysWorkout = () => {
  var storedworkouts = JSON.parse(localStorage.getItem("workouts"));
  console.log(storedworkouts);

  return (
    <div>
      <h1 className='header peak'>Today's Workout</h1>
      <TodaysWorkoutList />
      <div className='footer2'>
        <Link to="/builder">Go Back</Link>
        <Link to="/dashboard">Save</Link>
      </div>
    </div>
  )
}

export default TodaysWorkout