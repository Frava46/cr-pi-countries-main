import { useEffect, useState } from "react";
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { orderCountries, getCountries, getCountriesByName, getAux, filterCountries } from "../Redux/actions";
import Nav from "../Nav/Nav";
import style from './home.module.css';

const Home = () => {
  
  const countriesAux = useSelector((state)=> state.countriesAux)
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const value = event.target.value;
    dispatch(orderCountries(value))
   
  };

  const handlerFilter = (event)=> {
    const value = event.target.value;
    console.log(value)
    dispatch(filterCountries(value))
  }
  
  useEffect(() => {
      dispatch(getCountries());

  }, []);
  
  return (
    <div className={style.container}>
      <h1>🏡</h1>
      <Nav/>
      <select onChange={handleOrder}>
        <option>Ordern't</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select onChange={handlerFilter}>
        <option value= "Filtern't">FilterContinent</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Antarctica">Antarctica</option>
        </select>
      <Cards/>
    </div>
  )
}

export default Home;