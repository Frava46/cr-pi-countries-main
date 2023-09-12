import { useState } from "react";

const Form = () => {


    const [activity, setActivity] = useState({
        name:"",
        difficulty: 1,
        season:"",
        duration:"",
        countries:[]
    })

    const [errors, setErrors] = useState({});


    const handleDifficulty = (event) => {
        setActivity({...activity, difficulty: parseInt(event.target.value)})

    }

    const handleChange = (event)=>{
        setActivity({...activity, [event.target.name]: event.target.value});
    //   setErrors(validation({...activity, [event.target.name]: event.target.value }))
    };

    const handleSubmit = () => {
        

    };

    console.log(activity)
    return (
    <div>
        <form>
            <label>Name:</label>
            <input onChange={handleChange} value={activity.name} type="text" name="name"></input>

            <label>Difficulty:</label>
            <select onChange={handleDifficulty}  type="number" name="difficulty">
                <option value= "1">1</option>
                <option value= "2">2</option>
                <option value= "3">3</option>
                <option value= "4">4</option>
                <option value= "5">5</option>
            </select>


            <label>Duration:</label>
            <input onChange={handleChange} value={activity.duration} type="text" name="duration"></input>

            <label>Season:</label>
            <input onChange={handleChange} value={activity.season} type="text" name="season"></input>

            <label>Countries:</label>
            <input onChange={handleChange} value={activity.countries} type="text" name="countries"></input>

            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
    )
}

export default Form;