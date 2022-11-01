import { AxiosRequestConfig } from 'axios';
import { keys, PartialRecord } from '@utils/common';
import Request from './Request';
const SERVER_SUBSCRIPTION_URL = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/`;
const { VITE_APP_API_KEY } = import.meta.env;

const apiQueryKeys = {
  page: 'page',
  perPage: 'perPage',
  day: 'cond[RCRIT_PBLANC_DE::GTE]',
  region: 'cond[SUBSCRPT_AREA_CODE_NM::EQ]',
  id: 'cond[PBLANC_NO::EQ]',
} as const;

type Options = {
  page: number;
  perPage: number;
  id: number;
  day: string;
  region: string;
};

type ApiQueryKeys = {
  page: Options['page'];
  perPage: Options['perPage'];
  'cond[RCRIT_PBLANC_DE::GTE]': Options['day'];
  'cond[SUBSCRPT_AREA_CODE_NM::EQ]': Options['region'];
  'cond[PBLANC_NO::EQ]': Options['id'];
};
export default class OpenAPI extends Request {
  constructor(BASE_URL: string) {
    super(BASE_URL);
    this.req.interceptors.request.use(
      (config: AxiosRequestConfig<any>) => {
        config.params = { serviceKey: VITE_APP_API_KEY };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  private getApplyParams = (options: PartialRecord<keyof Options, any>) => {
    if (!options) return {};

    return keys(options).reduce((acc, cur) => {
      acc[apiQueryKeys[cur]] = options[cur];
      return acc;
    }, {} as Partial<ApiQueryKeys>);
  };

  getApplyById = (id: number, page = 1, perPage = 10) =>
    this.req.get('/getAPTLttotPblancDetail', {
      params: this.getApplyParams({ id, page, perPage }),
    });

  getApplyList = ({ day, region, page = 1, perPage = 10 }: Partial<Options>) =>
    this.req.get('/getAPTLttotPblancDetail', {
      params: this.getApplyParams({ region, day, page, perPage }),
    });
}
