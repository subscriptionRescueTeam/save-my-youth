import styled from 'styled-components';
import ListTitle from './ListTitle';
import { SubscriptionUsedFront } from '../types';
import { useNavigate } from 'react-router-dom';

export type ItemProps = {
  title: string;
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

const Item = ({ title, SubscriptionList }: ItemProps) => {
  const navigate = useNavigate();

  return (
    <article>
      <ListTitle title={title} />
      <StyledItem>
        {SubscriptionList.map((subscription, i) => (
          <StyledItemSpan
            key={subscription.id}
            onClick={() =>
              navigate('/detail', {
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
