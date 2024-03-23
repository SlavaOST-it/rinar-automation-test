import axios from "axios";

export const instance = axios.create({
    method: 'GET',
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
    }
});