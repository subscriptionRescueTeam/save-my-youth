import axios from 'axios';
import { useEffect, useState } from 'react';
import { SubscriptionResponse, SubscriptionData } from '../types';

const useSubscription = (keyword?: string) => {
  const [subData, setSubData] = useState<SubscriptionData[]>([]);

  const getPosts = async (SUBSCRPT_AREA_CODE_NM?: string) => {
    try {
      const response = await axios.get<SubscriptionResponse>(
        `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[SUBSCRPT_AREA_CODE_NM::EQ]=${SUBSCRPT_AREA_CODE_NM}`
      );
      return response.data.subscription_data.data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPosts(keyword ?? '서울').then((res) => {
      setSubData(res ?? []);
    });
  }, [keyword]);

  return subData;
};

export default useSubscription;
