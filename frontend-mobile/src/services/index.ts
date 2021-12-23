import axios from 'axios';

export const api = axios.create({
    baseURL: 'localhost:8080',
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";