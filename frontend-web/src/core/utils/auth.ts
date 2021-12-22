import jwtDecode from 'jwt-decode';
import history from './history';

export const CLIENT_ID =  process.env.REACT_APP_CLIENT_ID ?? 'movieflix';
export const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'movieflix123';

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string,
    userId: number;
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

export const saveSessionData = (loginResponse: LoginResponse ) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('authData') || '{}';
    const parsedSessionData = JSON.parse(sessionData);

    return parsedSessionData as LoginResponse;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();

    try{
        const tokenDecoded = jwtDecode(sessionData.access_token);
        return tokenDecoded as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }   
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();

    return Date.now() <= exp * 1000;
}

export const isAuthenticated = () => {

    // "authData" no localStorage
    // access_token não pode estar espirado
    const sessionData = getSessionData();

    return sessionData.access_token && isTokenValid();
}

export const isAllowedByRole = (routeRoles: Role[] = []) => {
    if(routeRoles.length === 0) {
        return true;
    }

    const { authorities } = getAccessTokenDecoded();
    
    return routeRoles.some(role => authorities?.includes(role));   
}

export const logout = () => {
    localStorage.removeItem('authData');
    history.replace('/');
}