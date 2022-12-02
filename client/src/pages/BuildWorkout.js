import {React, useState} from 'react';
import Chest from '../components/Chest';
import Back from '../components/Back';
import Legs from '../components/Legs';
import Arms from '../components/Arms';
import Core from '../components/Core';
import Workouts from '../components/Workouts';


const BuildWorkout = (props) => {
    const [currentWorkouts, setWorkout] = useState([]);
    const addExercise = (e) => {
      console.log(currentWorkouts)
      console.log(e.target.previousSibling.textContent)
      let clickedExercise = e.target.previousSibling.textContent;
      // setWorkout({...currentWorkouts, clickedExercise})
      setWorkout([...currentWorkouts, clickedExercise]);   
    }

    // const deleteExercise = (clickedExercise) => {
    //     setWorkout(clickedExercise.filter((clickedExercise) => clickedExercise==clickedExercise))
    // }

  return (
    <header>
        <h1 className='header'>Build Your Workout</h1>
        <div className="cards-wrap">
            <div className="card">
                <Chest addExercise={addExercise}/>
            </div>
            <div className="card">
                <Back addExercise={addExercise}/>
            </div>
            <div className="card">
                <Legs addExercise={addExercise}/>
            </div>
            <div className="card">
                <Arms addExercise={addExercise}/>
            </div>
            <div className="card">
                <Core addExercise={addExercise}/>
            </div>
            <div className="card">
                <Workouts workoutArray={currentWorkouts} setWorkout={setWorkout}/>
            </div>    
        </div>
        <div className="footer">Go Back</div>
    </header>
  )
}
//css in JS (put style={headingStyle} next to h1)
// const headingStyle = {
//     color: "#fff",
//     backgroundColor: '#e36686'
// }

export default BuildWorkout