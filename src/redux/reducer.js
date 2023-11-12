const initialState = {
    darkMode: false
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case "DARK_MODE":
            return {...state, darkMode: !state.darkMode};
            default:
            return state;
    }
}

export default reducer;