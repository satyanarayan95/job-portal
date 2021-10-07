
import {instance} from './api';

export const login =(userInfo) => instance.post("/auth/login",{...userInfo})




//will return a token which i need to pass in verify token api call
export const resetPassword =(email)=>instance.get(`/auth/resetpassword?email=${email}`)


export const changePassword =(passwords,token) => instance.post("/auth/resetpassword",{...passwords,...token})

