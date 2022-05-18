import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { 청약 } from '../types';

let subData: Array<청약> = [];

const getPosts = async (SUBSCRPT_AREA_CODE_NM?: string) => {
  try {
    const areaCode  = SUBSCRPT_AREA_CODE_NM || "서울";

    const response: AxiosResponse<any> = await axios.get(
      `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[SUBSCRPT_AREA_CODE_NM::EQ]=${SUBSCRPT_AREA_CODE_NM}`
    );

//'https://secret-reaches-74853.herokuapp.com/api/subscription/default'
    subData = [];
    let res = response.data.subscription_data.data;

    res.map((v: any) => {
      let subscriptionState = {
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
    console.error(e);
  }

  console.log(subData);
};

const useSubscription = (keyword?: string) => {
  useEffect(() => {
    getPosts(keyword);
  }, []);

  return { subData };
};

export default useSubscription;
