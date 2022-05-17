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

  const 청약리스트: Array<청약> = [
    {
      id: 0,
      name: '제 1차 장기전세주택 입주자모집공고.',
      location: '서울시 영등포구',
      like: false,
    },
    {
      id: 1,
      name: '2022년 특화형 전세임대 청년 기숙사형(경희대)...',
      location: '서울시 구로구',
      like: false,
    },
    {
      id: 2,
      name: '[토지임대부 사회주택] 홍시주택(금천구 소재) 입..',
      location: '경기도 하남시',
      like: false,
    },
  ];

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
      <MainCardList popularityList={청약리스트} likeList={청약리스트} />
    </LayoutNavigation>
  );
};

export default Home;
