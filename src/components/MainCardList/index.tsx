import { 청약 } from '../../types';
import MainCardItem from '../MainCardItem';
import * as S from './index.styled';

export type MainCardProps = {
  popularityList: Array<청약>;
  likeList: Array<청약>;
};

const MainCardList = ({ popularityList, likeList }: MainCardProps) => {
  return (
    <S.MainCardList>
      <MainCardItem title="인기" 청약리스트={popularityList}></MainCardItem>
      <MainCardItem title="최신" 청약리스트={likeList}></MainCardItem>
    </S.MainCardList>
  );
};

export default MainCardList;
