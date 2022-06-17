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
  latestList: SubscriptionUsedFront[];
};

const List = ({ popularityList, latestList }: MainCardProps) => {
  return (
    <StyledList>
      <Item type="popularity" SubscriptionList={popularityList} />
      <Item type="latest" SubscriptionList={latestList} />
    </StyledList>
  );
};

export default List;
