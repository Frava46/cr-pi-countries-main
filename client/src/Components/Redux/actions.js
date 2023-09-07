import axios from "axios";



export const getCountries = ()=> {

    return async(dispatch) => {
         const {data} = await axios.get('http://localhost:3001/countries')

         console.log(data)
         
           return dispatch({
              type: 'GET_COUNTRIES',
              payload: data,
           });
}};
// export const getCountriesByName = (countriName) => {

//    return async(dispatch) => {
//       try {
//          const response = await axios.get(`http://localhost:3001/countries/${countriName}`);
//          const {data} = response;
//          return dispatch({type: 'GET_COUNTRY', payload:data});
//       }catch(error) {

//       }
//    }

// }
