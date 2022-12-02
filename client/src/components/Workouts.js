import React from 'react'
import {useState} from 'react'

// const workoutArray = [
//     {
//       "id": 1,
//       "name": "Push-ups",
//       "type": "Chest",
//     },
//     {
//       "id": 2,
//       "name": "Bench Press",
//       "type": "Chest",
//     },
//     {
//       "id": 3,
//       "name": "Chest Fly",
//       "type": "Chest",
//     },
//     {
//       "id": 4,
//       "name": "Incline Press",
//       "type": "Chest",
//     },
//     {
//       "id": 5,
//       "name": "Decline Press",
//       "type": "Chest",
//     },
//     {
//       "id": 6,
//       "name": "Squats",
//       "type": "Legs",
//     },
//     {
//       "id": 7,
//       "name": "Deadlift",
//       "type": "Legs",
//     },
//     {
//       "id": 8,
//       "name": "Lunges",
//       "type": "Legs",
//     },
//     {
//       "id": 9,
//       "name": "Hamstring Curls",
//       "type": "Legs",
//     },
//     {
//       "id": 10,
//       "name": "Leg Extensions",
//       "type": "Legs",
//     },
//   ]

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
}

const Workouts = ({ workoutArray, setWorkout }) => {

  const [value, setValue] = useState(0); // integer state

  const makeButtonFunction = (i) => {
    return () => {
      console.log(i)
      workoutArray.splice(i, 1)
      console.log(workoutArray)
      setWorkout(workoutArray)

      // force update
      setValue(value => value + 1)
    }
  };


  return (
    <div className="card-inner">
      <h2>Current Workout</h2>
      {workoutArray.map((workout, i) => (
        // <h3 key={workoutArray.id} className="aside">{workoutArray.name}</h3>
        <div>
        
          <p>{workout}<button onClick={makeButtonFunction(i)} className='btn'>-</button></p>
        </div>
      ))}
    </div>
  )
}

export default Workouts