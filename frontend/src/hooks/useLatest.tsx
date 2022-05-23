import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import SearchCardList from '../components/SearchCardList';
import { Subscription, SearchCardListProps } from '../types';

const useLatest = (keyword?: string) => {
    const [subData, setSubData] = useState<Subscription[]>([]);

    const getPosts = async (SUBSCRPT_AREA_CODE_NM?: string) => {
        try {
            const now = new Date();
            const theOtherDay = new Date(now.setDate(now.getDate() - 10))
                .toJSON()
                .slice(0, 10)
                .replace(/-/g, '-');

            const response: AxiosResponse<any> = await axios.get(
                `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[SUBSCRPT_AREA_CODE_NM::EQ]=${theOtherDay}`
            );
            let res = response.data.subscription_data.data;
            const data = res.map((v: any) => {
                let subscriptionState = {
                    id: v.PBLANC_NO,
                    houseName: v.HOUSE_NM,
                    houseLocation: v.HSSPLY_ADRES,
                    applyStartDate: v.RCEPT_BGNDE,
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

export default useLatest;
