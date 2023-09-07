import Card from "../Card/Card"
import {useSelector} from "react-redux"

const Cards = () => {

    const allCountries = useSelector((state) => state.allCountries);

    return (
        <div>
            {allCountries.map((country)=> {
                return(
                    <div>
                        <Card key={country?.id}
                        id= {country?.id}
                        flagImg = {country?.flagImg}
                        name= {country?.name}
                        continent = {country?.continent}/>
                    </div>
                )
            })}
        </div>

    )

}


export default Cards;
