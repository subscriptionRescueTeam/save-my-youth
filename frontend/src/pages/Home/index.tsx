import { Input, MainCardList, LayoutNavigation, CardSlider } from '../../components';
import { 청약 } from '../../types';
import styled from 'styled-components';
import COLOR from '../../constants/color';
import useSubscription from '../../hooks/useSubscription';
import { useState } from 'react';

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

  const [popular3, setPopular3] = useState(subData);
  const [latest3, setLatest3] = useState(subData);

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
      // TODO: 렌더링 문제
      <MainCardList popularityList={popular3} likeList={latest3} />
    </LayoutNavigation>
  );
};

export default Home;
