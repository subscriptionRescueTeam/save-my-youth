import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Subscription, SubscriptionUsedMyPageByAPI } from '../types';

const useLike = () => {
  const [LikeList, setLikeList] = useState<SubscriptionUsedMyPageByAPI[]>();

  const getLikeList = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://secret-reaches-74853.herokuapp.com/api/user/like/`
      );
      const res = response.data.like_list;
      const data = res.map((v: any) => {
        const newlike_list = {
          id: v.sub_id,
          houseName: v.name,
          endDate: v.end_date,
          likeNum: v.like_num,
        };
        return newlike_list;
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getLikeList().then((res) => {
      setLikeList(res);
    });
  }, []);

  return { LikeList };
};

export default useLike;
