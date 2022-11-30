import React from 'react'

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

const Workouts = ({workoutArray}) => {
  return (
    <>
        {workoutArray.map((workout) => (
        // <h3 key={workoutArray.id} className="aside">{workoutArray.name}</h3>
        <h3 className="aside">{workout}</h3>
        ))}
    </>
  )
}

export default Workouts