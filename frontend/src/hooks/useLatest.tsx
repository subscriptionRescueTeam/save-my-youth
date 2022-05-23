import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import tmpImg from '../assets/images/picture2.png';
import { SubscriptionUsedMainPage } from '../types';
import SearchCardList from '../components/SearchCardList';
import { Subscription, SummarizedSubscription, SearchCardListProps } from '../types';

const useLatest = ({ subData }: SearchCardListProps) => {
    const [LatestSubscriptions, setLatestSubscriptions] = useState<Subscription[]>([]);

    const getLatestPosts = async () => {
        const now = new Date();
        const theOtherDay = new Date(now.setDate(now.getDate() - 10))
            .toJSON()
            .slice(0, 10)
            .replace(/-/g, '-');

        try {
            const response: AxiosResponse<any> = await axios.get(
                `https://secret-reaches-74853.herokuapp.com/api/subscription/cond[RCRIT_PBLANC_DE::GTE]=${theOtherDay}`
            );
            const res = response.data.subscription_data.data;
            const data: Subscription[] = res.map((v: any) => {
                const subscription: Subscription = {
                    id: v.PBLANC_NO,
                    houseName: v.HOUSE_NM,
                    houseLocation: v.HSSPLY_ADRES,
                    applyStartDate: v.RCEPT_BGNDE,
                    applyEndDate: v.RCEPT_ENDDE,
                };
                return subscription;
            });
            return subData;
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getLatestPosts().then((res) => {
            if (res) setLatestSubscriptions(res);
        });
    }, []);

    return { LatestSubscriptions };
};

export default useLatest;
