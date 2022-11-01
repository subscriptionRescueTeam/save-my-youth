import Request from './Request';

export default class MainAPI extends Request {
  constructor(BASE_URL: string) {
    super(BASE_URL);

    this.setRefreshToken();
  }

  logInWithGoogleAccount = (access_token: string) =>
    this.req.post('/social-login/google/', {
      access_token: access_token,
    });

  getMyLikeList = () => this.req.get('/user/like/');

  getMyLike = (id: number) => this.req.get<{ like_num: number; status: boolean }>(`/like/${id}`);

  getLikeList = (ids: number[]) => Promise.all(ids.map((id) => this.getMyLike(id)));

  addLike = (data: { sub_id: number; name: string; end_date: string; address: string }) =>
    this.req.post('/like', data);

  private getRefreshToken = (refreshToken: string) =>
    this.req.post(`/token/refresh/`, {
      refresh: refreshToken,
    });

  private setRefreshToken = () => {
    this.req.interceptors.request.use(
      (config: any) => {
        const accessToken = this.cookies.get('AccessToken');
        if (accessToken) {
          config.headers['Content-Type'] = 'application/json';
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.req.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401) {
          const RefreshToken = await this.cookies.get('RefreshToken');

          const { data } = await this.getRefreshToken(RefreshToken);

          const newAccessToken = data.access;
          const newRefreshToken = data.refresh;

          await this.cookies.set('AccessToken', newAccessToken, {
            path: '/',
            secure: true,
            sameSite: false,
          });
          await this.cookies.set('RefreshToken', newRefreshToken, {
            path: '/',
            secure: true,
            sameSite: false,
          });
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          const retryOriginalRequest = new Promise((resolve) => {
            resolve(this.req(originalRequest));
          });

          return retryOriginalRequest;
        }

        return Promise.reject(error);
      }
    );
  };
}
