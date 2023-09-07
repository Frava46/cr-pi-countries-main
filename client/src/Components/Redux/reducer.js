

let initialState = {
    allCountries:[],
    // countriesAux:[],
    Activities:[],
}


const reducer = (state = initialState, action) => {

switch(action.type) {
    case "GET_COUNTRIES":
        return {...state, allCountries: action.payload,};
}
}

export default reducer;