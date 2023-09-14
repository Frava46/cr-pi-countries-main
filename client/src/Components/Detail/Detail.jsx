import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById } from "../Redux/actions";


const Detail = () =>{

    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(getById(id));
        
    }, [dispatch]);
    
    const countryDetail = useSelector((state) => state.countryDetail)

    return (
        <div>
            <Link to= "/home"><button>⬅back</button></Link>
            <img src= {countryDetail?.flagImg} alt= ""></img>
            <h2>Name: {countryDetail?.name}</h2>
            <h2>Capital: {countryDetail?.capital}</h2>
            <h2>Continent: {countryDetail?.continent}</h2>
            <h2>Subregion: {countryDetail?.subregion}</h2>
            <h2>Area: {`${countryDetail?.area?.toLocaleString()}`} km²</h2>
            <h2>Population: {countryDetail?.population?.toLocaleString()}</h2>
            {!countryDetail?.Activities.length
            ?<h3>Has no Activities</h3>
            :countryDetail?.Activities.map((act)=>(<h3>Activities: {act.name}</h3>))}
         </div>
    )
}

export default Detail;