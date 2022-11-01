import MainAPI from './MainAPI';
import OpenAPI from './OpenAPI';

const MAIN_API_URL = 'https://secret-reaches-74853.herokuapp.com/api';
const SERVER_SUBSCRIPTION_URL = 'https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/';

export const mainAPI = new MainAPI(MAIN_API_URL);
export const openAPI = new OpenAPI(SERVER_SUBSCRIPTION_URL);
