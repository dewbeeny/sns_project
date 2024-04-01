// src/apis/index.js
// api.js
import axios from 'axios';

const baseURL = 'http://54.180.90.124:8080';

const API = axios.create({
  baseURL,
  withCredentials: true, 
});

export default API;
