import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import tmpImg from '../assets/images/picture2.png';
import { ListType, SubscriptionResponse, SubscriptionUsedFront } from '../types';
const { VITE_APP_API_KEY } = import.meta.env;

const SERVER_SUBSCRIPTION_URL = `https://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?page=1&perPage=10&serviceKey=${VITE_APP_API_KEY}`;
const SERVER_LIKE_COUNT_URL = 'https://secret-reaches-74853.herokuapp.com/api/like';

export type Condition = ListType | 'today' | 'theOtherDay' | 'region' | 'id';

const useApply = (options: { condition: Condition; region?: string; id?: number }) => {
  const [loading, setLoading] = useState(false);
  const [applies, setApplies] = useState<SubscriptionUsedFront[]>([]);

  const now = new Date();
  const today = now.toJSON().slice(0, 10).replace(/-/g, '-');
  const theOtherDay = new Date(now.setDate(now.getDate() - 7)).toJSON().slice(0, 10);

  const getRequestUrlByOptions = (): string => {
    let condition = '';

    switch (options.condition) {
      case 'theOtherDay':
      case 'popular':
      case 'new': {
        condition = `&cond[RCRIT_PBLANC_DE::GTE]=${theOtherDay}`;
        break;
      }
      case 'today': {
        condition = `&cond[RCRIT_PBLANC_DE::GTE]=${today}`;
        break;
      }
      case 'region': {
        condition = `&cond[SUBSCRPT_AREA_CODE_NM::EQ]=${options.region}`;
        break;
      }
      case 'id': {
        condition = `&cond[PBLANC_NO::EQ]=${options.id}`;
        break;
      }
    }
    return SERVER_SUBSCRIPTION_URL + condition;
  };

  const get = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<SubscriptionResponse> = await axios.get(
        getRequestUrlByOptions()
      );
      const res = response.data.data;

      const data = res
        .filter((v) => {
          if (options.condition === 'today' && v.RCRIT_PBLANC_DE !== today) {
            return false;
          }
          return true;
        })
        .map((v) => {
          const apply: SubscriptionUsedFront = {
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
            PRZWNER_PRESNATN_DE: v.PRZWNER_PRESNATN_DE,
            CNTRCT_CNCLS_BGNDE: v.CNTRCT_CNCLS_BGNDE,
            CNTRCT_CNCLS_ENDDE: v.CNTRCT_CNCLS_ENDDE,
            likeNum: -1,
            imgLink: tmpImg,
          };

          return apply;
        });

      for (let i = 0; i < data.length; i++) {
        const likeNumResponse = await axios.get(SERVER_LIKE_COUNT_URL + `/${data[i].id}`);
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
    get().then((res) => {
      if (res) {
        switch (options.condition) {
          case 'popular': {
            const popularityList = res
              .sort((a, b) => {
                return new Date(a.likeNum).getDate() - new Date(b.likeNum).getDate();
              })
              .slice(0, 6);
            setApplies(popularityList);
            break;
          }
          case 'new': {
            const latestList = res.sort((a, b) => {
              return new Date(b.recNotice).getDate() - new Date(a.recNotice).getDate();
            });
            setApplies(latestList);
            break;
          }
        }

        setApplies(res);
      }
    });
  }, [options.condition, options.region]);

  return { loading, applies };
};

export default useApply;
