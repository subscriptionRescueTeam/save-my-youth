import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ListType, SubscriptionUsedFront } from '../types';
import ListTitle from './ListTitle';

/* never used */

export type ItemProps = {
  type: ListType;
  SubscriptionList: SubscriptionUsedFront[];
};

const Item = ({ type, SubscriptionList }: ItemProps) => {
  const navigate = useNavigate();

  return (
    <article>
      <ListTitle type={type} />
      <StyledItem>
        {SubscriptionList.map((subscription, i) => (
          <StyledItemSpan
            key={subscription.id}
            onClick={() =>
              navigate('/detail/', {
                state: { id: subscription.id },
              })
            }
          >
            {i + 1}. {subscription.houseName}
          </StyledItemSpan>
        ))}
      </StyledItem>
    </article>
  );
};

export default Item;

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const StyledItemSpan = styled.span`
  padding: 0.5rem 0;
  font-size: 0.9rem;
  cursor: pointer;
`;
