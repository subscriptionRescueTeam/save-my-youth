import styled from 'styled-components';
import MainCardItem from './MainCardItem';
import { SubscriptionUsedFront } from '../types';

export const StyledMainCardList = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export type MainCardProps = {
  popularityList: SubscriptionUsedFront[];
  likeList: SubscriptionUsedFront[];
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
