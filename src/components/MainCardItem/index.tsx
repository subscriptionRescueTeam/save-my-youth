import styled from 'styled-components';
import ListTitle from '../ListTitle';
import { 청약 } from '../../types';

export type MainCardItemProps = {
  title: string;
  청약리스트: Array<청약>;
};

export const StyledMainCardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const StyledMainCardItemSpan = styled.span`
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;

const MainCardItem = ({ title, 청약리스트 }: MainCardItemProps) => {
  return (
    <article>
      <ListTitle title={title} />
      <StyledMainCardItem>
        {청약리스트.map((subscription, i) => (
          <StyledMainCardItemSpan key={subscription.id}>
            {i + 1}. {subscription.name}
          </StyledMainCardItemSpan>
        ))}
      </StyledMainCardItem>
    </article>
  );
};

export default MainCardItem;
