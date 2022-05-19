import styled from 'styled-components';
import ListTitle from './ListTitle';
import { Subscription } from '../types';
import { useNavigate } from 'react-router-dom';

export type MainCardItemProps = {
  title: string;
  SubscriptionList: Array<Subscription>;
};

export const StyledMainCardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const StyledMainCardItemSpan = styled.span`
  padding: 0.5rem 0;
  font-size: 0.9rem;
  cursor: pointer;
`;

const MainCardItem = ({ title, SubscriptionList }: MainCardItemProps) => {
  const navigate = useNavigate();

  return (
    <article>
      <ListTitle title={title} />
      <StyledMainCardItem>
        {SubscriptionList.map((subscription, i) => (
          <StyledMainCardItemSpan key={subscription.id} onClick={() => navigate('/detail')}>
            {i + 1}. {subscription.houseName}
          </StyledMainCardItemSpan>
        ))}
      </StyledMainCardItem>
    </article>
  );
};

export default MainCardItem;
