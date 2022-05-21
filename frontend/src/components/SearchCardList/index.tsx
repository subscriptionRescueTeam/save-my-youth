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
        recNotice: data.recNotice,
        applyStartDate: data.applyStartDate,
        applyEndDate: data.applyEndDate,
        applyHomepage: data.applyHomepage
      }

      return <SearchCardItem key={summarizedSubscription.id} subscription={summarizedSubscription}/>
    })
  }</article>
};

export default SearchCardList;