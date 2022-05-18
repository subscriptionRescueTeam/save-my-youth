import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { 청약 } from '../types';

let subData: Array<청약> = [];

const getPosts = async () => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      'https://secret-reaches-74853.herokuapp.com/api/subscription/default'
    );

    subData = [];
    let res = response.data.subscription_data.data;

    res.map((v: any) => {
      let subscriptionState: 청약 = {
        id: v.PBLANC_NO,
        houseName: v.HOUSE_NM,
        houseLocation: v.HSSPLY_ADRES,
        applyScale: v.TOT_SUPLY_HSHLDCO,
        recNotice: v.RCRIT_PBLANC_DE,
        applyStartDate: v.RCEPT_BGNDE,
        applyEndDate: v.RCEPT_ENDDE,
        applyHomepage: v.HMPG_ADRES,
      };

      subData.push(subscriptionState);
    });
  } catch (e) {
    throw Error();
  }
};

const useSubscription = () => {
  useEffect(() => {
    getPosts();
  }, []);

  return { subData };
};

export default useSubscription;
