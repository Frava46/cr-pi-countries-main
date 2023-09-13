import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountries, getCountriesByName } from "../Redux/actions";


const CreateAct = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])

    const [errors, setErrors] = useState({});

    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        season: "",
        duration: "",
        countries: []
    })



    const handleDifficulty = (event) => {
        setActivity({ ...activity, difficulty: parseInt(event.target.value) })

    }

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        //* Condicional de si existe un pais, guardarlo en mi array de countries
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

        }else if(property === "") {
            setActivity(activity)
        }
         else {
            setActivity({ ...activity, [property]: value });
        }
        //   setErrors(validation({...activity, [event.target.name]: event.target.value }))
    };

    const handleSubmit = () => {


    };


    const countriesAux = useSelector((state) => state.countriesAux);
    console.log(activity)
    return (
        <div>
            <form>
                <label>Name:</label>
                <input onChange={handleChange} value={activity.name} type="text" name="name"></input>

                <label>Difficulty:</label>
                <select value={activity.difficulty} onChange={handleDifficulty} type="number" name="difficulty">
                    <option disabled value="">Selection a difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>


                <label>Duration:</label>
                <input onChange={handleChange} value={activity.duration} type="text" name="duration"></input>

                <label>Season:</label>
                <select value={activity.season} onChange={handleDifficulty} type="text" name="season">
                    <option disabled value="">Select a season</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>

                <label>Countries:</label>
                <select onChange={handleChange} type="text" name='countries'>
                    <option disabled value= "">Select Countries </option>
                    {
                        //* mapeo de los paises , para mostrar todas las opciones en el select
                        countriesAux?.map((pais) => (
                            <option key={pais.id} value={pais.id}>
                                {pais.name}
                            </option>
                        ))
                    }
                </select>
                {activity.countries.length >= 10? <h4>Paises Relacionados: {`${activity.countries.length}(Max)`}</h4>
                :<h4>Paises Relacionados: {activity.countries.length}</h4>
                }
                

                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default CreateAct;