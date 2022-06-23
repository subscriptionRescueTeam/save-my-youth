import styled from 'styled-components';

import { SubscriptionUsedFront } from '../types';
import Item from './Item';

/* never used */

export type MainCardProps = {
  popularityList: SubscriptionUsedFront[];
  latestList: SubscriptionUsedFront[];
};

const List = ({ popularityList, latestList }: MainCardProps) => {
  return (
    <StyledList>
      <Item type="popular" SubscriptionList={popularityList} />
      <Item type="new" SubscriptionList={latestList} />
    </StyledList>
  );
};

export default List;

export const StyledList = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
