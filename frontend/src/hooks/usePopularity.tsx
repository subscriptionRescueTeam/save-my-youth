import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Subscription } from '../types';

const usePopularity = (keyword?: string) => {
    const [subData, setSubData] = useState<Subscription[]>([]);

    const getPosts = async (sub_id?: any) => {
        try {

            const response: AxiosResponse<any> = await axios.get(
                `hhttps://secret-reaches-74853.herokuapp.com/api/like/`
            );
            let res = response.data.subscription_data.data;
            const data = res.map((v: any) => {
                let subscriptionState = {
                    id: v.PBLANC_NO,
                    houseName: v.HOUSE_NM,
                    houseLocation: v.HSSPLY_ADRES,
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

export default usePopularity;
