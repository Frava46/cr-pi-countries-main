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
            let now = [...state.countriesAux]
            const OrderNow = now.sort((a, b) => a.name.localeCompare(b.name))
            const disorder = ()=> Math.random() - 0.5;
            
            return  {
                ...state,
                countriesAux: 
                action.payload === "A-Z"
                ? OrderNow
                : action.payload === "Z-A"?OrderNow.reverse()
                :now.sort(disorder)
          };
    default: return {...state} //caso de default, devolver la copia del estado.
}
}
// console.log(initialState.countriesAux);

export default reducer;