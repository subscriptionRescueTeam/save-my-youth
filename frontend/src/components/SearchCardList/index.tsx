import styled from 'styled-components';
import { Subscription, SummarizedSubscription } from '../../types';
import SearchCardItem from '../SearchCardItem';

export type SearchCardListProps = {
  subData: Subscription[];
}

const SearchCardList = ({subData}: SearchCardListProps) => {
  return <article>{
    subData && subData.map((data)=>{

      const summarizedSubscription:SummarizedSubscription = {
        id: data.id,
        houseName: data.houseName,
        houseLocation: data.houseLocation,
        applyScale: data.applyScale,
      }

      return <SearchCardItem key={summarizedSubscription.id} subscription={summarizedSubscription}></SearchCardItem>
    })
  }</article>
};

export default SearchCardList;