import { useEffect, useState } from "react";
import Cards from "../Cards/Cards"
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCountries, getCountries, getCountriesByName } from "../Redux/actions";
// import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";

const Home = () => {
  
  
  // const [homeInf, setHomeInf] = useState([])
  
  
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    const value = event.target.value;
    dispatch(orderCountries(value))
   
  }
  
  useEffect(() => {
    dispatch(getCountries());

  }, [dispatch]);
  
  return (
    <div>
      <h1>Home</h1>
      <Nav/>
      <select onChange={handleOrder}>
        <option>Ordern't</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      {/* <select >
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        </select> */}
      <Cards/>
    </div>
  )
}

export default Home;