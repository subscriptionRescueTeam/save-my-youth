import styled from 'styled-components';
import ListTitle from '../ListTitle';
import { 청약 } from '../../types';

export type MainCardItemProps = {
  title: string;
  청약리스트: Array<청약>;
};

export const StyledMainCardItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #f1eee9;
`;

const MainCardItem = ({ title, 청약리스트 }: MainCardItemProps) => {
  return (
    <article>
      <ListTitle title={title}></ListTitle>
      <StyledMainCardItem>
        {청약리스트.map((subscription) => (
          <span key={subscription.id}>{subscription.name}</span>
        ))}
      </StyledMainCardItem>
    </article>
  );
};

export default MainCardItem;
