import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, ORDER, GET_AUX, FILTER,POST_ACTIVITY } from "./action-types"


let initialState = {
    allCountries: [],
    countriesAux: [],
    countryDetail: {},
    Activities: [],
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state, allCountries: action.payload,
                countriesAux: action.payload
            };

        case GET_BY_NAME:
            return { ...state, countriesAux: action.payload };

        case GET_BY_ID:
            return { ...state, countryDetail: action.payload };

        case ORDER:
            let now = [...state.countriesAux]
            const OrderNow = now.sort((a, b) => a.name.localeCompare(b.name))
            const disorder = () => Math.random() - 0.5;

            return {
                ...state,
                countriesAux:
                    action.payload === "A-Z"
                        ? OrderNow
                        : action.payload === "Z-A" ? OrderNow.reverse()
                            : now.sort(disorder)
            };

        case GET_AUX:
            return { ...state, countriesAux: state.allCountries };

        case FILTER:
            let copia = [...state.allCountries];
            const filtrado = copia.filter((country) => country.continent === action.payload);

            return {
                ...state,
                countriesAux:
                    action.payload !== "Filtern't"
                        ? filtrado
                        : state.allCountries
            }

        case POST_ACTIVITY :
            return{...state,Activities:[...state.Activities, action.payload]};

        default: return { ...state } //caso de default, devolver la copia del estado.
    }
}
// console.log(initialState.countriesAux);

export default reducer;