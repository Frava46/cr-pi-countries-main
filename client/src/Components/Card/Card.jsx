import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getById } from "../Redux/actions";

const Card = ({id, flagImg, name, continent})=> {



return(
    <div>
        <Link to ={`/detail/${id}`}>
        <img src= {flagImg}/></Link>
        
        <h2>Name:{name}</h2>
        <h3>Continent: {continent}</h3>
    </div>
)
}

export default Card;