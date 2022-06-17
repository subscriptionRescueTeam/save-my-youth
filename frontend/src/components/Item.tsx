import styled from 'styled-components';
import ListTitle from './ListTitle';
import { SubscriptionUsedFront } from '../types';
import { useNavigate } from 'react-router-dom';

export type ItemProps = {
  type: 'popularity' | 'latest';
  SubscriptionList: SubscriptionUsedFront[];
};

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

const Item = ({ type, SubscriptionList }: ItemProps) => {
  const navigate = useNavigate();

  return (
    <article>
      <ListTitle title={type === 'popularity' ? '인기 청약 BEST3' : '최신 청약 BEST3'} />
      <StyledItem>
        {SubscriptionList.map((subscription, i) => (
          <StyledItemSpan
            key={subscription.id}
            onClick={() =>
              navigate('/more/', {
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
