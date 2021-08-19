const shadowXsetter = () => {
    return {
        type: "SET_SHADOW_X",
        payload: 10,
    }
}, shadowYsetter = () => {
    return {
        type: "SET_SHADOW_Y",
        payload: 10,
    }
}, blurSetter = () => {
    return {
        type: "SET_BLUR",
        payload: 10,
    }
}, spreadSetter = () => {
    return {
        type: "SET_SPREAD",
        payload: 10,
    }
}


export {shadowXsetter, blurSetter, shadowYsetter, spreadSetter}