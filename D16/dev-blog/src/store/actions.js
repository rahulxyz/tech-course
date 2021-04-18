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

function getBlogList() {

    return async dispatch =>{
        dispatch(request());

        try{
            const response = await operations.getBlogList();
            const data = response.data;

            dispatch(success(data));
        }catch(error){
            dispatch(failure());
        }
    }

    function request(){
        return {type: types.BLOG_LIST_REQUEST};
    }

    function success(payload){
        return {type: types.BLOG_LIST_SUCCESS, payload}
    }

    function failure(error){
        return {type: types.BLOG_LIST_FAILURE, error}
    }
}

function getArticleById(id) {

    return async dispatch =>{
        dispatch(request());

        try{
            const response = await operations.getArticleById(id);
            const data = response.data.article;

            dispatch(success(data));
        }catch(error){
            dispatch(failure());
        }
    }

    function request(){
        return {type: types.ARTICLE_REQUEST};
    }

    function success(payload){
        return {type: types.ARTICLE_SUCCESS, payload}
    }

    function failure(error){
        return {type: types.ARTICLE_FAILURE, error}
    }
}

function addBlog(body) {

    return async dispatch =>{
        dispatch(request());

        try{
            const response = await operations.addBlog(body);
            const data = response.data;
            
            dispatch(success(data));
        }catch(error){
            dispatch(failure());
        }
    }

    function request(){
        return {type: types.ADD_BLOG_REQUEST};
    }

    function success(payload){
        return {type: types.ADD_BLOG_SUCCESS, payload}
    }

    function failure(error){
        return {type: types.ADD_BLOG_FAILURE, error}
    }
}


const actions ={
    register,
    login,
    getBlogList,
    getArticleById,
    addBlog
}

export default actions;