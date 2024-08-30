// src/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/routes/auth', // Backend API base URL
  timeout: 10000,
});

export default axiosInstance;
