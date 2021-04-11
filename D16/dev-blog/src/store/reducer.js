import types from "./types";

const initialState = {
    user: null,
    isAuth: false,
    error: ""
}

function app(state = initialState, action){
    const {LOGIN_SUCCESS, LOGIN_FAILURE} = types;

    switch(action.type){

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                error: ""
            }
        
        case LOGIN_FAILURE:
            return {
                ...state
            }
        default: return state;
    }
}

export default app;