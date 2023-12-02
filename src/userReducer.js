export const userReducer = (previousState, instructions) => {
    let newstate = {...previousState}

    switch (instructions.type){
        case "login": 
            newState = "Pretend a fetch request finished and returned a JWT";
            return newState;
        case "logout":
            // newState = '';
            // return newstate;
            return '';
        default:
            return newState;
    }
}