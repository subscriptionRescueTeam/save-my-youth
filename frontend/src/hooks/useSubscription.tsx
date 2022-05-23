import axios from 'axios';
import { useEffect, useState } from 'react';
import { tempSub } from '../types';

interface Response {
  subscription_data: {
    data: {
      PBLANC_NO: number;
      HOUSE_NM: string;
      HSSPLY_ADRES: string;
      TOT_SUPLY_HSHLDCO: number;
      RCRIT_PBLANC_DE: string;
      RCEPT_BGNDE: string;
      RCEPT_ENDDE: string;
      HMPG_ADRES: string; //홈페이지
      SPSPLY_RCEPT_BGNDE: string; //특별공급 접수시작일
      SPSPLY_RCEPT_ENDDE: string; //특별공급 접수 종료일
      GNRL_RNK1_CRSPAREA_RCEPT_PD: string; //1순위 접수일 해당지역
      GNRL_RNK1_ETC_GG_RCPTDE_PD: string; //1순위 접수일 경기지역
      GNRL_RNK1_ETC_AREA_RCPTDE_PD: string; //1순위 접수일 기타지역
      GNRL_RNK2_CRSPAREA_RCEPT_PD: string; //2순위 접수일 해당지역
      GNRL_RNK2_ETC_GG_RCPTDE_PD: string; //2순위 접수일 경기지역
      GNRL_RNK2_ETC_AREA_RCPTDE_PD: string; //2순위 접수일 기타지역
      PRZWNER_PRESNATN_DE: string; //당첨자발표일
      CNTRCT_CNCLS_BGNDE: string; //계약시작일
      CNTRCT_CNCLS_ENDDE: string; //계약종료일
    }[];
  };
}

const useSubscription = (keyword?: string) => {
  const [subData, setSubData] = useState<tempSub[]>([]);

  const getPosts = async (SUBSCRPT_AREA_CODE_NM?: string) => {
    try {
      const response = await axios.get<Response>(
        `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[SUBSCRPT_AREA_CODE_NM::EQ]=${SUBSCRPT_AREA_CODE_NM}`
      );
      return response.data.subscription_data.data.map((v) => {
        return {
          1: v.PBLANC_NO,
          2: v.HOUSE_NM,
          3: v.HSSPLY_ADRES,
          4: v.TOT_SUPLY_HSHLDCO,
          5: v.RCRIT_PBLANC_DE,
          6: v.RCEPT_BGNDE,
          7: v.RCEPT_ENDDE,
          8: v.HMPG_ADRES,
          9: v.SPSPLY_RCEPT_BGNDE,
          10: v.SPSPLY_RCEPT_ENDDE,
          11: v.GNRL_RNK1_CRSPAREA_RCEPT_PD,
          12: v.GNRL_RNK1_ETC_GG_RCPTDE_PD,
          13: v.GNRL_RNK1_ETC_AREA_RCPTDE_PD,
          14: v.GNRL_RNK2_CRSPAREA_RCEPT_PD,
          15: v.GNRL_RNK2_ETC_GG_RCPTDE_PD,
          16: v.GNRL_RNK2_ETC_AREA_RCPTDE_PD,
          17: v.PRZWNER_PRESNATN_DE,
          18: v.CNTRCT_CNCLS_BGNDE,
          19: v.CNTRCT_CNCLS_ENDDE,
        };
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPosts('서울').then((res) => {
      setSubData(res ?? []);
      console.log(subData);
    });
  }, [keyword]);

  return { subData };
};

export default useSubscription;
