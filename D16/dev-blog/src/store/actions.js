import types from './types';
import operations from './operations';

function app() {

    return async dispatch =>{
        dispatch(request());
        let payload= await operations.getApp();

        try{
            dispatch(success(payload));
        }catch(error){
            dispatch(failure());
        }
    }

    function request(){
        return {type: types.APP_REQUEST};
    }

    function success(payload){
        return {type: types.APP_SUCCESS, payload}
    }

    function failure(error){
        return {type: types.APP_FAILURE, error}
    }
}

const actions ={
    app
}

export default actions;