import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { SubscriptionUsedFront } from '../types';

const usePopularity = (keyword?: string) => {
  const [subData, setSubData] = useState<SubscriptionUsedFront[]>([]);

  const getPosts = async (sub_id?: any) => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `hhttps://secret-reaches-74853.herokuapp.com/api/like/`
      );
      const res = response.data.subscription_data.data;
      const data = res.map((v: any) => {
        const subscriptionState = {
          id: v.PBLANC_NO,
          houseName: v.HOUSE_NM,
          houseLocation: v.HSSPLY_ADRES,
          applyEndDate: v.RCEPT_ENDDE,
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

export default usePopularity;
