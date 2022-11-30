import {React, useState} from 'react'

const Button = ({addExercise}) => {
  // const [currentWorkouts, setWorkout] = useState(["test"]);
  // const addExercise = (e) => {
  //   console.log(e.target.previousSibling.textContent)
  //   let clickedExercise = e.target.previousSibling.textContent;
  //   // setWorkout({...currentWorkouts, clickedExercise})
  //   setWorkout([...currentWorkouts, clickedExercise]);
  //   console.log(currentWorkouts)
  // }
  return <button onClick={addExercise} className='btn'>Add</button>
}

export default Button