import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doLogout } from './auth';

const BASE_URL = process.env.MOBILE_APP_BACKEND_URL ?? 'https://moises-movieflix.herokuapp.com/';


export const api = axios.create({
    baseURL: BASE_URL,
});


export async function makeRequest(params: AxiosRequestConfig){
    return axios({
       ...params,
       baseURL: BASE_URL
    });
}


export async function makePrivateRequest(params: AxiosRequestConfig){
    //console.warn("Request", params )
    const token = await AsyncStorage.getItem("@token");
    
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return makeRequest({ ...params, headers })
}