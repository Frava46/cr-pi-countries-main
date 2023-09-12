import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = ({onSearch}) => {
    // const dispatch = useDispatch()

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