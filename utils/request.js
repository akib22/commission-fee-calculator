const axios = require('axios');

const request = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 60000,
});

// Response interceptors
request.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

module.exports = request;
