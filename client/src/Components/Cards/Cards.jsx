// // import { useDispatch } from "react-redux"
// import Card from "../Card/Card"
// // import { Order } from "../Redux/actions"
// import { useEffect, useState } from "react"
// // import {useSelector} from "react-redux"
// import Paginado from "../Paginado/Paginado";
// import { useDispatch, useSelector } from "react-redux";
// import { getCountries } from "../Redux/actions";

// const Cards = () => {
//     const countriesAux = useSelector((state)=> state.countriesAux);
//     const dispatch = useDispatch()
//     console.log(countriesAux)
//     // const [cards, setCards] =  useState()

//     // const [pagina, setPagina] = useState(1);
//     // const [porPagina, setporPagina] = useState(10);

//     // const maximo = Math.ceil(countriesAux.length / porPagina);

//     useEffect(() => {
//         // setCards(countriesAux)
//         dispatch(getCountries());
//     },[dispatch])


//     return (
//         <div>
//             {/* <Paginado pagina={pagina} setPagina={setPagina} maximo={maximo} /> */}
//             {/* {typeof countriesAux !== "string" ? (countriesAux.slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((country, index) => { */}
//             {countriesAux
//             // slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
//             .map((country, index) => {
//                 return (
//                     <Card
//                         key={index}
//                         id={country?.id}
//                         name={country?.name}
//                         flagImg={country?.flagImg}
//                         continent={country?.continent} />
//                 )
//             })}
//         </div>

//     )

// }


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

const Cards = () => {
    const countriesAux = useSelector((state) => state.countriesAux);
    const dispatch = useDispatch();
    const [pagina, setPagina] = useState(1);
    const porPagina = 10; // Número de elementos por página

    

   

    // Calcular el índice de inicio y fin para la página actual
    const startIndex = (pagina - 1) * porPagina;
    const endIndex = startIndex + porPagina;

    return (
        <div>
            <Paginado pagina={pagina} setPagina={setPagina} maximo={Math.ceil(countriesAux.length / porPagina)} />

            {typeof countriesAux !== "string" ? countriesAux
                .slice(startIndex, endIndex)
                .map((country, index) => (
                    <Card
                        key={index}
                        id={country?.id}
                        name={country?.name}
                        flagImg={country?.flagImg}
                        continent={country?.continent}
                    />
                )): <h2>{countriesAux}</h2>}
        </div>
    );
};

export default Cards;

