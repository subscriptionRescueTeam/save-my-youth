import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
export const URL = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=1&perPage=10&serviceKey=${API_KEY}`;

