import types from './types';
import operations from './operations';

function register(credentials) {

    return async dispatch =>{
        dispatch(request());

        try{
            await operations.register(credentials);
            dispatch(success());
            return Promise.resolve();
        }catch(error){
            dispatch(failure());
            return Promise.reject();
        }
    }

    function request(){
        return {type: types.REGISTER_REQUEST};
    }

    function success(){
        return {type: types.REGISTER_SUCCESS}
    }

    function failure(error){
        return {type: types.REGISTER_FAILURE, error}
    }
}

function login(credentials) {

    return async dispatch =>{
        dispatch(request());

        try{
            const response = await operations.login(credentials);
            const data = response.data;
            sessionStorage.setItem("token", data.token);
            const user = {
                name: data.name,
                email: data.email
            }
            dispatch(success(user));
        }catch(error){
            dispatch(failure());
        }
    }

    function request(){
        return {type: types.LOGIN_REQUEST};
    }

    function success(payload){
        return {type: types.LOGIN_SUCCESS, payload}
    }

    function failure(error){
        return {type: types.LOGIN_FAILURE, error}
    }
}

const actions ={
    register,
    login
}

export default actions;