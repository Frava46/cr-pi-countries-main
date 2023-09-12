import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getById } from "../Redux/actions";

const Card = ({id, flagImg, name, continent})=> {



return(
    <div>
        <img src= {flagImg}/>
        <h2>Name:{name}</h2>
        <h3>Continent: {continent}</h3>
        <Link to ={`/detail/${id}`}>
            <button>See more</button></Link>
    </div>
)
}

export default Card;