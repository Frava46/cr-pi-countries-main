

const Card = ({flagImg, name, continent})=> {

return(
    <div>
        <img src = {flagImg}></img>
        <h2>Name:{name}</h2>
        <h3>Continent: {continent}</h3>
    </div>
)
}

export default Card;