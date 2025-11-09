import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.rawtechroots.cloud',
    withCredentials: true,
    
    headers: {
        'Content-Type':'application/json',
    },
});

export const getData = async <T = any>(endpoint:string): Promise<T> => {
    try{
        const response = await api.get<T>(endpoint);
        return response.data;
    } catch(error:any) {
        throw error.response?.data || { message: "Unexpected error."};
    }
};

export const postData = async <T = any>(endpoint:string, data:any): Promise<T> => {
    try{
        const response = await api.post<T>(endpoint,data);
        return response.data;
    } catch(error:any) {
        throw error.response?.data || { message: "Unexpected error. Check de postData method in utils "};
    }
}

export const patchData = async <T = any>(endpoint:string, data:any): Promise<T> => {
    try{
        const response = await api.patch<T>(endpoint,data);
        return response.data;
    }catch(error:any){ throw error.response?.data || { message: "An Error has occurred, visit api configuration. "}; }
}

export const credentialsLogin = async (email:string,password:string) => {
    return await postData<{ access_token:string }>('/auth/login',{email,password});
}

export const credentialsLogout = async () => {
        return await api.post('/auth/logout');
};

export const keyLogin = async(access_key:string) => {
    return await postData<{success:boolean}>('/api/finances/auth/login',{access_key});
}

export const keyLogout = async () => {
    try{
        const res = await api.post('/api/finances/auth/logout');
        return res;
    }catch(err:any){throw err} 
}

export const keyRegister = async (captcha:Object) => {
    return await postData<{success:boolean}>('/api/finances/auth/register',captcha);
}

export const generateCaptcha = async() => {
    try{
        const response =  await getData('/api/finances/auth/captcha');
        console.log('Captcha generado: ', response);

        if(response && response.captcha_value){
            return response;
        } else{
            throw new Error (`The response has not the expected value.`);
        }
        
    }catch(err:any){ throw err.message || 'unknown error during the captcha value creation.'; }
}

export const getProfile = async (email:any) => {
    return await api.get('auth/profile', email); // endpoint protegido que da info del usuario
}
/* eslint-disable @typescript-eslint/no-explicit-any */

// putData, deleteData, etc.