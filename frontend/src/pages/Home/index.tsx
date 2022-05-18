import { Input, MainCardList, LayoutNavigation, CardSlider } from '../../components';
import { 청약 } from '../../types';
import styled from 'styled-components';
import COLOR from '../../constants/color';
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
  color: ${COLOR.PRI_DARK_010};
  padding-right: 2vw;
`;

const Home = () => {
  const { subData } = useSubscription();

  console.log(subData);

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
      <MainCardList popularityList={subData} likeList={subData} />
    </LayoutNavigation>
  );
};

export default Home;
