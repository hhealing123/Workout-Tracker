import React, {useState} from 'react';


const SelectSet = ({exercises, setExercises, i}) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        setExercises(values => 
            values.map((value, index) => {
                if (i===index){
                    return {...value, addRow:true, numberOfSets: +e.target.value}
                }
                return value
            })
        )
    }
    console.log(exercises)
    return (
        <div className='sets'>
            <label for="sets">Sets:&nbsp;</label>
            <select name="sets" id="sets" 
            onChange={(e)=> handleChange(e)}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default SelectSet