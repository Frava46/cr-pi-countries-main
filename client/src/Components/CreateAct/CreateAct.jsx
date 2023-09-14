import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountries, getCountriesByName, postActivity } from "../Redux/actions";
import validation from "./validation";
import { Link } from "react-router-dom";


const CreateAct = () => {
    const dispatch = useDispatch()

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    
    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        season: "",
        duration: "",
        countries: []
    });
    
    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        // Condicional de si existe un pais, guardarlo en mi array de countries
        if (property === 'countries') {

            if (activity.countries.length >= 10 || value === "") {
                return;
            }

            setActivity({
                ...activity,
                countries: activity.countries.includes(value)
                    ? activity.countries
                    : [...activity.countries, value]
            });
            setErrors(validation({...activity}))
            

        }else if(property === "difficulty") {
            setActivity({ ...activity, difficulty: parseInt(value) })
            setErrors(validation({...activity, difficulty: parseInt(value)}))
        }
         else {
            setActivity({ ...activity, [property]: value });
            setErrors(validation({...activity,[property]: value}))
        }
        if(errors.incomplete == "All ready!") {
            setIsSubmitDisabled(false);
        }else{setIsSubmitDisabled(true)}
     
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(activity))
        window.alert("The activity was created succesfully")
    };


    const countriesAux = useSelector((state) => state.countriesAux);
    const Activities = useSelector((state) => state.Activities);
    console.log(Activities)

    return (
        <div>
            <Link to = "/home"><button>⬅back</button></Link> 

            <form>
                <label>Name:</label>
                <input onChange={handleChange} value={activity?.name} type="text" name="name"></input>
                {errors.name1?<p>{errors.name1}</p>: <p>{errors.name2}</p>}

                <br/>

                <label>Difficulty:</label>
                <select value={activity?.difficulty} onChange={handleChange} type="number" name="difficulty">
                    <option disabled value="0">Selection a difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {errors.difficulty && <p>{errors.difficulty}</p>}

                <br/>

                <label>Duration:</label>
                <input onChange={handleChange} type="text" name="duration"></input>
                {errors.duration && <p>{errors.duration}</p>}

                <br/>

                <label>Season:</label>
                <select value={activity?.season} onChange={handleChange} type="text" name="season">
                    <option disabled value="">Selection a Season</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                {errors.season && <p>{errors.season}</p>}

                <br/>

                <label>Countries:</label>
                <select value=""onChange={handleChange} type="text" name='countries'>
                    <option disabled value ="">Select Countries </option>
                    {
                        //* mapeo de los paises , para mostrar todas las opciones en el select
                        countriesAux?.map((pais) => (
                            <option key={pais.id} value={pais.id}>
                                {pais.name}
                            </option>
                        ))
                    }
                </select>
                {errors.countries && <p>{errors.countries}</p>}
                {activity.countries.length >= 10? <h4>Paises Relacionados: {`${activity.countries.length}(Max)`}</h4>
                :<h5>{activity.countries.length} countries were related</h5>
                }

                <br/>

                <h4>{errors?.incomplete}</h4>
                {errors.incomplete === "All ready!"
                ? <button type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>SUBMIT</button>
                : <p></p>}
                
            </form>
        </div>
    )
}

export default CreateAct;