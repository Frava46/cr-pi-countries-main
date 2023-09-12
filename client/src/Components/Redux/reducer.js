import {GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, ORDER} from "./action-types"


let initialState = {
    allCountries:[],
    countriesAux:[],
    countryDetail: {},
    Activities:[],
    ActivitiesAux:[],
}


const reducer = (state = initialState, action) => {

switch(action.type) {
    case GET_COUNTRIES:
        return {...state, allCountries:action.payload,
        countriesAux: action.payload};

    case GET_BY_NAME :
        return{...state, countriesAux:action.payload};
        
    case GET_BY_ID   :
        return {...state, countryDetail:action.payload};

    case ORDER:

        const Order = state.countriesAux.sort((a, b)=> a.name.localeCompare(b.name));

        if(action.payload === "A-Z") {
            // console.log(Order);
            return {...state, countriesAux: Order}
        } 
        else if(action.payload === "Z-A"){
            const orderRev = Order.reverse()
            // console.log(orderRev)
        return {...state, countriesAux: orderRev}
    };
    //    if(action.payload === "Ordern't") {
    //         const allCountries = state.allCountries;
    //         const countriesDisordered = [];
    //         allCountries.map((country)=> {
    //             if(state.countriesAux.includes( country)) {
    //                 countriesDisordered.push(country);
    //    }})
    //         return {...state, countriesAux: countriesDisordered}
    //     };

    default: return {...state} //caso de default, devolver la copia del estado.
}
}
// console.log(initialState.countriesAux);

export default reducer;