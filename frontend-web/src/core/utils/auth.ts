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


export const saveSessionData = (loginResponse: LoginResponse ) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}