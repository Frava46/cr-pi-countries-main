import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName, getCountries, getAux } from "../Redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()

    const handlerBack = () => {
        dispatch(getAux())
    };

    const onSearch = (name) => {
        //onSearch que dispacha la action que pedira al back un pais por su nombre
        dispatch(getCountriesByName(name))
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }
    const [name, setName] = useState("")
    return (<div>
        <button onClick={handlerBack}>🔄</button>
        <input placeholder="Search" type="search" value={name} onChange={handleChange}></input>
        <button onClick={() => { onSearch(name) }}>🔎</button>

    </div>)
}

export default SearchBar;