import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ArrowRight from '../assets/icons/arrowRight';
import MainBanner from '../assets/images/mainBanner.svg';
import { CardSlider, Input, LayoutNavigation } from '../components';
import Card from '../components/Card';
import Description from '../components/Description';
import Indexing from '../components/Indexing';
import ListTitle from '../components/ListTitle';
import PALETTE from '../constants/palette';
import useSubscription from '../hooks/useSubscription';

const Home = () => {
  const { loading: todaySubscriptionsLoading, subscriptions: todaySubscriptions } =
    useSubscription('today');
  const { loading: popularityListLoading, subscriptions: popularityList } =
    useSubscription('popular');
  const { loading: latestListLoading, subscriptions: latestList } = useSubscription('new');

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

      {todaySubscriptionsLoading && (
        <StyledFlex>
          <span>오늘의 청약을 가져오고 있습니다 🌀</span>
        </StyledFlex>
      )}
      {!todaySubscriptionsLoading && (
        <StyledSectionContainer alignItems={'center'}>
          <StyledTodySubscriptionTitle>
            <div>오늘의 청약</div>
            <div>
              <StyledColorSpan>{todaySubscriptions.length}</StyledColorSpan>건
            </div>
          </StyledTodySubscriptionTitle>
          <CardSlider subscriptions={todaySubscriptions} />
        </StyledSectionContainer>
      )}

      {!popularityListLoading && (
        <>
          <StyledSectionContainer alignItems={'flex-start'}>
            <ListTitle type={'popular'} />
            <Description type={'popular'} topBottomPadding={false} />
            <StyledFlex>
              {popularityList.slice(0, 3).map((item, index) => (
                <Indexing key={item.id} index={index + 1}>
                  <Card
                    direction="row"
                    subscriptionId={item.id}
                    title={item.houseName}
                    likeNum={item.likeNum || 0}
                  />
                </Indexing>
              ))}
            </StyledFlex>
          </StyledSectionContainer>
        </>
      )}

      {!latestListLoading && (
        <>
          <ListTitle type={'new'} />
          <CardSlider subscriptions={latestList} />
        </>
      )}
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

export const StyledTodySubscriptionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 16px 18px;
`;

export const StyledColorSpan = styled.span`
  color: ${PALETTE.PRI_DARK_010};
  padding-right: 5px;
`;

export const StyledFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 16px 0 24px;
`;

export const StyledSectionContainer = styled.section<{ alignItems: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  gap: 8px;
  padding-bottom: 32px;
`;
