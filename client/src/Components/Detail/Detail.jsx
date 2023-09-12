import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
            <h1>Detail</h1>
            <img src= {countryDetail?.flagImg} alt= ""></img>
            <h2>Name: {countryDetail?.name}</h2>
            <h2>Capital: {countryDetail?.capital}</h2>
            <h2>Continent: {countryDetail?.continent}</h2>
            <h2>Subregion: {countryDetail?.subregion}</h2>
            <h2>Area: {`${countryDetail?.area}`}</h2>
            <h2>Population: {countryDetail?.population}</h2>
         </div>
    )
}

export default Detail;