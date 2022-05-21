import styled from 'styled-components';
import MainCardItem from '../MainCardItem';
import { Subscription, SubscriptionUsedMainPage } from '../../types';

export const StyledMainCardList = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export type MainCardProps = {
  popularityList: Array<SubscriptionUsedMainPage>;
  likeList: Array<SubscriptionUsedMainPage>;
};

const MainCardList = ({ popularityList, likeList }: MainCardProps) => {
  return (
    <StyledMainCardList>
      <MainCardItem title="인기 청약 BEST3" SubscriptionList={popularityList} />
      <MainCardItem title="최신 청약 BEST3" SubscriptionList={likeList} />
    </StyledMainCardList>
  );
};

export default MainCardList;
