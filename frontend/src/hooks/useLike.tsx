import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Subscription } from '../types';
import axiosInstance from '../utils/axiosInstance';

const useLike = () => {
  const [likeList, setLikeList] = useState<Subscription[]>();

  const getLikeList = async () => {
    try {
      const response: any = await axiosInstance.get(
        `api/user/like/`
      );

      const res = response['like_list']
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
  
    return { likeList };
  };
  
  export default useLike;  