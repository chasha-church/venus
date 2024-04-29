import axios from 'axios';

const axiosDefaults = {};
export const httpAuth = axios.create(axiosDefaults);

httpAuth.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('token'); // TODO find better solution
        config.headers.Authorization = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
