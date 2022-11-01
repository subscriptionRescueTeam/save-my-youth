import axios, { AxiosInstance } from 'axios';
import { Cookies } from 'react-cookie';
import axiosInstance from '@utils/axiosInstance';

export default class Request {
  public req: AxiosInstance;
  protected cookies: Cookies;
  constructor(BASE_URL: string) {
    this.cookies = new Cookies();
    this.req = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
  }

  getAccessTokenHeader = () => {
    const accessToken = this.cookies.get('AccessToken');

    return accessToken
      ? {
          Authorization: `Bearer ${accessToken}`,
        }
      : {};
  };
}
