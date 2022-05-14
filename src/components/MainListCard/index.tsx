import * as S from './index.styled';
import { 청약 } from '../../types';

export type MainListCardProps = {
  청약리스트: Array<청약>;
};

const MainListCard = ({ 청약리스트 }: MainListCardProps) => {
  return (
    <S.MainListCard>
      {청약리스트.map((subscription) => (
        <span key={subscription.id}>{subscription.name}</span>
      ))}
    </S.MainListCard>
  );
};

export default MainListCard;
