import axios from 'axios';
import { onPost } from 'service/network';

const endpoints={
    register: "/users/register",
    login: "/users/login"
}


const register = (body)=>{
    return onPost(endpoints.register, body, null, false);
}

const login = (body)=>{
    return onPost(endpoints.login, body, null, false);
}

const operations = {
    register,
    login
}

export default operations;