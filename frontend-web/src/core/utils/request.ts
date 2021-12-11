import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET} from './auth';

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080'

export const makeRequest = (params: AxiosRequestConfig) => {
    return axios({
       ...params,
       baseURL: BASE_URL
    });
}


export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

    const headers = {
        Authorization: `basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    //const payload = `username=${loginData.username}&password=${loginData.password}&grant_type=password`;
    //Gera a querystring
    const payload = qs.stringify({...loginData, grant_type: 'password'});
    
   // '/oauth/token'
   // username=maria@gmail.com&password=123456&grant_type=password
   return makeRequest({url:'/oauth/token', data: payload, method: 'POST', headers });
}