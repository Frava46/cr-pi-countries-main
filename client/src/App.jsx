// import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing Page/Landing";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from './Components/Redux/actions';

function App() {
    
  
  return (

    <div>
      <Routes>
        <Route path = "/" element= {<Landing/>}> </Route>
        <Route path= "/home" element= {<Home/>}></Route>
      </Routes>
    </div>

  )
}

export default App;