import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = process.env.MOBILE_APP_BACKEND_URL ?? 'http://192.168.100.7:8080';


export async function makeRequest(params: AxiosRequestConfig){
    return axios({
       ...params,
       baseURL: BASE_URL
    });
}


export async function makePrivateRequest(params: AxiosRequestConfig){
    
    const token = await AsyncStorage.getItem("@token");
    
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return makeRequest({ ...params, headers })
}

