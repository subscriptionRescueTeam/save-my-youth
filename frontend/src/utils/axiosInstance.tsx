import axios from 'axios';
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${JSON.parse(localStorage.loginData).access_token}`,
  },
  baseURL: 'https://secret-reaches-74853.herokuapp.com/',
});

export default axiosInstance;
