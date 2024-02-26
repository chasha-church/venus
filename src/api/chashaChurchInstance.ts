import axios from "axios";

export const chashaChurchInstance = axios.create({  
    baseURL: "https://cc-neptune-39e02856f5ff.herokuapp.com/api/v1"
});
