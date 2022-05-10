/**
 * Created by Zura on 12/25/2021.
 */
 import axios from "axios";
 import store from "./store";
 import router from "./router";
 
 const axiosClient = axios.create({
   baseURL: `http://localhost:8000/api`
 })
 
 export default axiosClient;
 