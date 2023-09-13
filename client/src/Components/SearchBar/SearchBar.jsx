import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../Redux/actions";

const SearchBar = () => {
    const dispatch = useDispatch()


    const onSearch = (name) => {          //onSearch que dispacha la action que pedira al back un pais por su nombre
        dispatch(getCountriesByName(name))
      }

const handleChange = (event) => {
    setName(event.target.value);
    // if(name === "") {
    //     dispatch()
    // }
}
    const [name, setName] = useState("")
    return (<div>

        <input placeholder="Search" type= "search" value = {name} onChange = {handleChange}></input>
        <button onClick={()=> {onSearch(name)}}>🔎</button>

    </div>)
}

export default SearchBar;