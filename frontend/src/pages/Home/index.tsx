import { Input, MainCardList, LayoutNavigation, CardSlider } from '../../components';
import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { SubscriptionUsedMainPage } from '../../types';
import useTodaySubscription from '../../hooks/useTodaySubscription';
import useTheOtherDaySubscription from '../../hooks/useTheOtherDaySubscription';
import MainBanner from '../../assets/images/mainBanner.svg';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assets/icons/arrowRight';

export const StyledMainBannerContainer = styled.div`
  width: 100%;
  height: 205px;
  background-image: url(${MainBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyleTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding-top: 39px;
  margin-bottom: 23.23px;
`;

export const StyledTitle = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  color: ${PALETTE.WHITE};
  margin-bottom: 8px;
`;

export const StyledServiceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px 12px 16px;
  background-color: ${PALETTE.LIGHT_010};
  margin-bottom: 16px;
`;

export const StyledServiceReason = styled.span`
  font-size: 0.875rem;
  color: ${PALETTE.PRI_MAIN};
`;

export const StyledGotoServiceIntroduction = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

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
      <StyledMainBannerContainer>
        <StyleTitleContainer>
          <StyledTitle>청년을 위한 청약 공고를</StyledTitle>
          <StyledTitle>빠르게 찾아보세요!</StyledTitle>
        </StyleTitleContainer>
        <Input placeholder="검색어를 입력하세요 (ex.지역)" />
      </StyledMainBannerContainer>
      <StyledServiceContainer>
        <StyledServiceReason>왜 ‘청년을 구해줘!’ 일까요?</StyledServiceReason>
        <Link to="/service">
          <StyledGotoServiceIntroduction>
            서비스 소개 보러가기
            <ArrowRight color={PALETTE.BLACK} />
          </StyledGotoServiceIntroduction>
        </Link>
      </StyledServiceContainer>

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
