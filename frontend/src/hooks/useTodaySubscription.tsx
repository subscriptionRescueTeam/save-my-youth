import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import tmpImg from '../assets/images/picture2.png';
import { SubscriptionUsedMainPage } from '../types';

const useTodaySubscription = () => {
  const [todaySubscriptions, setTodaySubscriptions] = useState<SubscriptionUsedMainPage[]>([]);
  const today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

  //   const getLatestPosts = async () => {
  //     const now = new Date();
  //     const theOtherDay = new Date(now.setDate(now.getDate() - 10))
  //       .toJSON()
  //       .slice(0, 10)
  //       .replace(/-/g, '-');

  //     try {
  //       const response: AxiosResponse<any> = await axios.get(
  //         `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[RCRIT_PBLANC_DE::GTE]=${theOtherDay}`
  //       );
  //       const res = response.data.subscription_data.data;
  //       const data: SubscriptionUsedMainPage[] = res.map((v: any) => {
  //         const subscriptionState: SubscriptionUsedMainPage = {
  //           id: v.PBLANC_NO,
  //           houseName: v.HOUSE_NM,
  //           recNotice: v.RCRIT_PBLANC_DE,
  //         };
  //         return subscriptionState;
  //       });
  //       return data;
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  const getTodayPosts = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[RCRIT_PBLANC_DE::GTE]=${today}`
      );
      const res = response.data.subscription_data.data;
      const data: SubscriptionUsedMainPage[] = res.map((v: any) => {
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
    getTodayPosts().then((res) => {
      if (res) setTodaySubscriptions(res);
    });
  }, []);

  return { todaySubscriptions };
};

export default useTodaySubscription;