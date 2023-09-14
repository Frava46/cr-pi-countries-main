import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";

const Cards = () => {
    const countriesAux = useSelector((state) => state.countriesAux);
    const [pagina, setPagina] = useState(1);
    const porPagina = 10; // numero de elementos por pagina

    // para calcular el indice de inicio y fin para la página actual
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

