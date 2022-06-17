import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { SubscriptionUsedFront } from '../types';
import tmpImg from '../assets/images/picture2.png';

const SERVER_SUBSCRIPTION_URL = `https://secret-reaches-74853.herokuapp.com/api/subscription/perPage=10`;
const SERVER_LIKE_COUNT_URL = `https://secret-reaches-74853.herokuapp.com/api/like`;

export type Request = 'today' | 'theOtherDay' | 'region' | 'id';

const useTodaySubscription = (request: Request, region?: string, id?: number) => {
  const [loading, setLoading] = useState(false);
  const [subscriptions, setSubscriptions] = useState<SubscriptionUsedFront[]>([]);

  const now = new Date();
  const today = '2022-06-11'; //now.toJSON().slice(0, 10).replace(/-/g, '-');
  const theOtherDay = new Date(now.setDate(now.getDate() - 10)).toJSON().slice(0, 10);

  const getRequestUrl = (request: Request, region?: string, id?: number): string => {
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
      case 'id': {
        condition = `&cond[PBLANC_NO::EQ]=${id}`;
        break;
      }
    }
    return SERVER_SUBSCRIPTION_URL + condition;
  };

  const getSubscriptionsFromServer = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await axios.get(getRequestUrl(request, region, id));
      const res = response.data.subscription_data.data;

      const data: SubscriptionUsedFront[] = res
        .filter((v: any) => {
          if (request === 'today' && v.RCRIT_PBLANC_DE !== today) {
            return false;
          }
          return true;
        })
        .map((v: any) => {
          const subscriptionState: SubscriptionUsedFront = {
            id: v.PBLANC_NO,
            houseName: v.HOUSE_NM,
            recNotice: v.RCRIT_PBLANC_DE,
            houseLocation: v.HSSPLY_ADRES,
            applyScale: v.TOT_SUPLY_HSHLDCO,
            applyStartDate: v.RCEPT_BGNDE,
            applyEndDate: v.RCEPT_ENDDE,
            applyHomepage: v.HMPG_ADRES,
            SPSPLY_RCEPT_BGNDE: v.SPSPLY_RCEPT_BGNDE,
            SPSPLY_RCEPT_ENDDE: v.SPSPLY_RCEPT_ENDDE,
            GNRL_RNK1_CRSPAREA_RCEPT_PD: v.GNRL_RNK1_CRSPAREA_RCEPT_PD,
            GNRL_RNK1_ETC_GG_RCPTDE_PD: v.GNRL_RNK1_ETC_GG_RCPTDE_PD,
            GNRL_RNK1_ETC_AREA_RCPTDE_PD: v.GNRL_RNK1_ETC_AREA_RCPTDE_PD,
            GNRL_RNK2_CRSPAREA_RCEPT_PD: v.GNRL_RNK2_CRSPAREA_RCEPT_PD,
            GNRL_RNK2_ETC_GG_RCPTDE_PD: v.GNRL_RNK2_ETC_GG_RCPTDE_PD,
            GNRL_RNK2_ETC_AREA_RCPTDE_PD: v.GNRL_RNK2_ETC_AREA_RCPTDE_PD,
            likeNum: -1,
            imgLink: tmpImg,
          };
          return subscriptionState;
        });

      for (let i = 0; i < data.length; i++) {
        const likeNumResponse: AxiosResponse<any> = await axios.get(
          SERVER_LIKE_COUNT_URL + `/${data[i].id}`
        );
        data[i].likeNum = likeNumResponse.data.like_num;
      }

      return data;
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscriptionsFromServer().then((res) => {
      if (res) setSubscriptions(res);
    });
  }, [request, region]);

  return { loading, subscriptions };
};

export default useTodaySubscription;
