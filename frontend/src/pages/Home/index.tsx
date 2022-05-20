import { Input, MainCardList, LayoutNavigation, CardSlider } from '../../components';
import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import useSubscription from '../../hooks/useSubscription';

export const StyledMainWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const StyledColorSpan = styled.span`
  color: ${PALETTE.PRI_DARK_010};
  padding-right: 2vw;
`;

const Home = () => {
  const { subData } = useSubscription();

  return (
    <LayoutNavigation>
      <Input placeholder="검색어를 입력하세요 (ex. 월세, 전세 등)" />
      <StyledMainWrapper>
        <div>오늘의 청약</div>
        <div>
          <StyledColorSpan>9</StyledColorSpan>건
        </div>
      </StyledMainWrapper>
      <CardSlider />
      <MainCardList popularityList={subData.slice(0, 3)} likeList={subData.slice(4, 7)} />
    </LayoutNavigation>
  );
};

export default Home;
