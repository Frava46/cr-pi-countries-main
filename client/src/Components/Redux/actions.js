import axios from "axios";
import {GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, ORDER} from "./action-types"



export const getCountries = ()=> {

    return async(dispatch) => {
         const {data} = await axios.get('http://localhost:3001/countries')

         // console.log(data)
         
           return dispatch({
              type: GET_COUNTRIES,
              payload: data,
           });
}
};


export const getCountriesByName = (name) => {

   return async(dispatch) => {
      try {
         const {data} = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
         
         return dispatch({type: GET_BY_NAME, payload:data});
      }catch(error) {
         console.log(error.message);
      }
   }

};

export const getById = (id) => {

   return async(dispatch) => {
      try{
         const {data} = await axios.get(`http://localhost:3001/countries/${id}`);
         return dispatch({type: GET_BY_ID, payload:data});
      } catch(error) {
         console.log(error.message);
      }
   }
};

export const orderCountries = (value) => {
   return (dispatch) => {
      return dispatch({type: ORDER, payload: value});
   }
};
