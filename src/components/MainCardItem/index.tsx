import * as S from './index.styled';
import { 청약 } from '../../types';
import ListTitle from '../ListTitle';

export type MainCardItemProps = {
  title: string;
  청약리스트: Array<청약>;
};

const MainCardItem = ({ title, 청약리스트 }: MainCardItemProps) => {
  return (
    <article>
      <ListTitle title={title}></ListTitle>
      <S.MainCardItem>
        {청약리스트.map((subscription) => (
          <span key={subscription.id}>{subscription.name}</span>
        ))}
      </S.MainCardItem>
    </article>
  );
};

export default MainCardItem;
