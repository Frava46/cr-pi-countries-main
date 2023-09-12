import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = ({onSearch}) => {


    return (
    <nav>

<SearchBar onSearch={onSearch}/>

<Link to = "/Activity"> <button>Create Activity</button> </Link>

    </nav>)

}


export default Nav;