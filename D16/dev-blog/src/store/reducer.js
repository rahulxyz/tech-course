import types from "./types";

const initialState = {
    appStore: true,
    name: "rahul"
}

function app(state = initialState, action){
    const {APP_SUCCESS} = types;
    switch(action.type){
        case APP_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default: return state;
    }
}

export default app;