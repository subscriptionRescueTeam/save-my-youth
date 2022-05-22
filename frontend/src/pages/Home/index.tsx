import { Input, MainCardList, LayoutNavigation, CardSlider } from '../../components';
import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { SubscriptionUsedMainPage } from '../../types';
import useTodaySubscription from '../../hooks/useTodaySubscription';
import useTheOtherDaySubscription from '../../hooks/useTheOtherDaySubscription';
import useSearch from '../../hooks/useSearch';

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
  const subData = useSearch();
  const { todaySubscriptions } = useTodaySubscription();
  const { theOtherDaySubscriptions } = useTheOtherDaySubscription();

  const popularityList = theOtherDaySubscriptions
    .sort((a: SubscriptionUsedMainPage, b: SubscriptionUsedMainPage) => {
      return new Date(a.likeNum).getDate() - new Date(b.likeNum).getDate();
    })
    .slice(0, 3);

  const likeList = theOtherDaySubscriptions
    .sort((a: SubscriptionUsedMainPage, b: SubscriptionUsedMainPage) => {
      return new Date(b.recNotice).getDate() - new Date(a.recNotice).getDate();
    })
    .slice(0, 3);

  return (
    <LayoutNavigation>
      <Input placeholder="검색어를 입력하세요 (ex.지역)" />
      <StyledMainWrapper>
        <div>오늘의 청약</div>
        <div>
          <StyledColorSpan>{todaySubscriptions.length}</StyledColorSpan>건
        </div>
      </StyledMainWrapper>
      <CardSlider todaySubscriptions={todaySubscriptions} />
      <MainCardList popularityList={popularityList} likeList={likeList} />
    </LayoutNavigation>
  );
};

export default Home;
