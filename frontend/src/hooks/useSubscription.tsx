import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import tmpImg from '../assets/images/picture2.png';
import { SubscriptionUsedMainPage } from '../types';

const SERVER_URL = `https://secret-reaches-74853.herokuapp.com/api/subscription/perPage=10`;

export type Request = 'today' | 'theOtherDay' | 'region';

const useTodaySubscription = (request: Request, region?: string) => {
  const [subscriptions, setSubscriptions] = useState<SubscriptionUsedMainPage[]>([]);

  const now = new Date();
  const today = '2022-06-11'; //now.toJSON().slice(0, 10).replace(/-/g, '-');
  const theOtherDay = new Date(now.setDate(now.getDate() - 10)).toJSON().slice(0, 10);

  const getRequestUrl = (request: Request, region?: string): string => {
    let condition = '';
    switch (request) {
      case 'today': {
        condition = `&cond[RCRIT_PBLANC_DE::GTE]=${today}`;
        break;
      }
      case 'theOtherDay': {
        condition = `&cond[RCRIT_PBLANC_DE::GTE]=${theOtherDay}`;
        break;
      }
      case 'region': {
        condition = `&cond[SUBSCRPT_AREA_CODE_NM::EQ]=${region}`;
        break;
      }
    }
    return SERVER_URL + condition;
  };

  const getSubscriptionsFromServer = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(getRequestUrl(request, region));
      const res = response.data.subscription_data.data;
      const data: SubscriptionUsedMainPage[] = res
        .filter((v: any) => {
          if (request === 'today' && v.RCRIT_PBLANC_DE !== today) {
            return false;
          }
          return true;
        })
        .map((v: any) => {
          const subscriptionState: SubscriptionUsedMainPage = {
            id: v.PBLANC_NO,
            houseName: v.HOUSE_NM,
            recNotice: v.RCRIT_PBLANC_DE,
            likeNum: 26, // TODO: DB에서 가져오기
            imgLink: tmpImg,
          };
          return subscriptionState;
        });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSubscriptionsFromServer().then((res) => {
      if (res) setSubscriptions(res);
    });
  }, [request, region]);

  return { subscriptions };
};

export default useTodaySubscription;
