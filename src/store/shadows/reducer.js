const initialState = {
    shadowX : 10,
    shadowY : 10,
    blur : 50,
    spread : 10,
    inset : false,
    color : "black"
};

export default (state = initialState, action) => {
    if (action.type === "SET_SHADOW_X") {
        return {
            ...state,
            shadowX: state.shadowX + 10
        }
    } else if (action.type === "SET_SHADOW_Y"){
        return {
            ...state,
            shadowY: state.shadowY - 10
        }
    
    } else if (action.type === "SET_BLUR"){
        return {
            ...state,
            blur: state.blur - 10
        }
    
    } else if (action.type === "SET_SPREAD"){
        return {
            ...state,
            spread: state.spread - 10
        }
    }
    return state;
}