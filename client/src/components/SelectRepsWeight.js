import React from 'react'

const SelectRepsWeight = () => {
  return (
    <div className='repsWeight'>
        <label for="reps">Reps:  </label>
            <select name="reps" id="reps">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option> 
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
            </select>  
        <form className='weight'>
            <label for="weight">Weight: &nbsp;</label>
            <input type="text" id="weight" name="weight"></input>
        </form>
    </div>
  )
}

export default SelectRepsWeight