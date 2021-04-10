import axios from 'axios';

const getApp = ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response=> response.data);
}

const operations = {
    getApp
}

export default operations;