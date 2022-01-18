import axios from 'axios';

const api = axios.create({
    baseURL: "https://jsonserver-hamburgueria-kenzie.herokuapp.com"
})

export default api;