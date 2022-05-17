import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

let subData: any = [];

const getPosts = async () => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      'https://secret-reaches-74853.herokuapp.com/api/subscription/default'
    );

    let res = response.data.subscription_data.data;

    res.map((v: any) => {
      let subscriptionState = {
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
