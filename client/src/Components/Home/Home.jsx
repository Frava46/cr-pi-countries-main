import { useEffect } from "react";
import Cards from "../Cards/Cards"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Redux/actions";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    
  }, [dispatch])


    return (
        <div>
          <h1>Home</h1>
          <Cards/>
        </div>
    )
}

export default Home;