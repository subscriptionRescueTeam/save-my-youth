import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Subscription } from '../types';

const useSearch = (keyword?: string) => {
  const [subData, setSubData] = useState<Subscription[]>([]);

  const getPosts = async (SUBSCRPT_AREA_CODE_NM?: string) => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[SUBSCRPT_AREA_CODE_NM::EQ]=${SUBSCRPT_AREA_CODE_NM}`
      );
      let res = response.data.subscription_data.data;
      const data = res.map((v: any) => {
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
        return subscriptionState;
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPosts(keyword).then((res) => {
      setSubData(res);
    });
  }, [keyword]);

  return { subData };
};

export default useSearch;
