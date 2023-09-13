import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav = () => {


    return (
    <nav>

<SearchBar />

<Link to = "/newActivity"> <button>Create Activity</button> </Link>

    </nav>)

}


export default Nav;