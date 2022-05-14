import * as S from './index.styled';
import { 청약 } from '../../types';
import ListTitle from '../ListTitle';

export type MainListCardProps = {
  title: string;
  청약리스트: Array<청약>;
};

const MainListCard = ({ title, 청약리스트 }: MainListCardProps) => {
  return (
    <article>
      <ListTitle title={title}></ListTitle>
      <S.MainListCard>
        {청약리스트.map((subscription) => (
          <span key={subscription.id}>{subscription.name}</span>
        ))}
      </S.MainListCard>
    </article>
  );
};

export default MainListCard;
