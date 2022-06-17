import styled from 'styled-components';
import Item from './Item';
import { SubscriptionUsedFront } from '../types';

export const StyledList = styled.section`
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

const List = ({ popularityList, likeList }: MainCardProps) => {
  return (
    <StyledList>
      <Item title="인기 청약 BEST3" SubscriptionList={popularityList} />
      <Item title="최신 청약 BEST3" SubscriptionList={likeList} />
    </StyledList>
  );
};

export default List;
