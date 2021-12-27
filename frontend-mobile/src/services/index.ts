import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://192.168.100.7:8080',
});

export const TOKEN = "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

export { makePrivateRequest } from './request';