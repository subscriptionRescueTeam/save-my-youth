import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { FAQType } from '../types';

const useFAQ = () => {
  const [FAQList, setFAQList] = useState<FAQType[]>();

  const getFAQList = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `https://secret-reaches-74853.herokuapp.com/api/faq/`
      );
      const res = response.data;
      const data = res.map((v: FAQType) => {
        const newFAQ = {
          question: v.question,
          answer: v.answer,
          faq_category: v.faq_category,
        };
        return newFAQ;
      });
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getFAQList().then((res) => {
      setFAQList(res);
    });
  }, []);

  return { FAQList };
};

export default useFAQ;
