import axios from "axios";
//import {reduxStore as store} from '../store/Store';

export const axiosInstance1 = axios.create({
    baseURL: 'https://portfolio-cdd5e-default-rtdb.firebaseio.com/',
});

export const axiosInstance2 = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
});

axiosInstance1.interceptors.request.use(config =>{
    config.params = config.params || {};
    /* const state = store.getState();
    const token = state.auth.auth.idToken;
    config.params.auth = token; */
    return config;
});




