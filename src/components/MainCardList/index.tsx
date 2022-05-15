import styled from 'styled-components';
import MainCardItem from '../MainCardItem';
import { 청약 } from '../../types';

export const StyledMainCardList = styled.section`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export type MainCardProps = {
  popularityList: Array<청약>;
  likeList: Array<청약>;
};

const MainCardList = ({ popularityList, likeList }: MainCardProps) => {
  return (
    <StyledMainCardList>
      <MainCardItem title="인기 청약 BEST3" 청약리스트={popularityList}></MainCardItem>
      <MainCardItem title="최신 청약 BEST3" 청약리스트={likeList}></MainCardItem>
    </StyledMainCardList>
  );
};

export default MainCardList;
