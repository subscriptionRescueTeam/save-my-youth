import { Input, LayoutNavigation, CardSlider, List } from '../components';
import styled from 'styled-components';
import PALETTE from '../constants/palette';
import { SubscriptionUsedFront } from '../types';
import MainBanner from '../assets/images/mainBanner.svg';
import { Link } from 'react-router-dom';
import ArrowRight from '../assets/icons/arrowRight';
import useSubscription from '../hooks/useSubscription';
import ListTitle from '../components/ListTitle';
import Description from '../components/Description';

const Home = () => {
  const { subscriptions: todaySubscriptions } = useSubscription('today');
  const { subscriptions: popularityList } = useSubscription('popular');
  const { subscriptions: latestList } = useSubscription('new');

  return (
    <LayoutNavigation>
      <StyledMainBannerContainer>
        <StyleTitleContainer>
          <StyledTitle>청년을 위한 청약 공고를</StyledTitle>
          <StyledTitle>빠르게 찾아보세요!</StyledTitle>
        </StyleTitleContainer>
        <Input placeholder="지역명을 입력하세요" />
      </StyledMainBannerContainer>
      <StyledServiceContainer>
        <StyledServiceReason>왜 ‘청년을 구해줘!’ 일까요?</StyledServiceReason>
        <Link to="/info">
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
      <CardSlider subscriptions={todaySubscriptions} />

      <ListTitle type={'popular'} />
      <Description type={'popular'} />

      <ListTitle type={'new'} />
      <CardSlider subscriptions={latestList} />
      <List popularityList={popularityList.slice(0, 3)} latestList={latestList.slice(0, 3)} />
    </LayoutNavigation>
  );
};

export default Home;

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
  padding-right: 5px;
`;
