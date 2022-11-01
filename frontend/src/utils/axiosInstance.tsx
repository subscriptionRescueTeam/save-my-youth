import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';
const BASE_URL = 'https://secret-reaches-74853.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  function (config: any) {
    const accessToken = cookies.get('AccessToken');
    if (accessToken) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      const RefreshToken = await cookies.get('RefreshToken');

      const { data } = await axios.post(`${BASE_URL}api/token/refresh/`, {
        refresh: RefreshToken,
      });

      const newAccessToken = data.access;
      const newRefreshToken = data.refresh;

      await cookies.set('AccessToken', newAccessToken, {
        path: '/',
        secure: true,
        sameSite: false,
      });
      await cookies.set('RefreshToken', newRefreshToken, {
        path: '/',
        secure: true,
        sameSite: false,
      });
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

      const retryOriginalRequest = new Promise((resolve) => {
        resolve(axiosInstance(originalRequest));
      });

      return retryOriginalRequest;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
