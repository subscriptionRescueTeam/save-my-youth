import { useEffect, useState } from 'react';
import { ReactComponent as BigHeart } from '@assets/icons/bigHeart.svg';
import { ReactComponent as BigNullHeart } from '@assets/icons/bigNullHeart.svg';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PALETTE from '@constants/palette';
import useApply from '@hooks/useApply';
import axiosInstance from '@utils/axiosInstance';
import { DetailLocation, DetailSchedule, LayoutNavigation, TabBar } from '@components';
import { DetailState, HelpContents, IDetailOptions } from '@types';

const Detail = () => {
  const location = useLocation();
  const state = location.state as DetailState;
  const { id, imgLink } = state;

  const { loading, applies: subscriptions } = useApply({ condition: 'id', id });
  const subscription = subscriptions[0];

  const [heartState, setHeartState] = useState(false);
  const [checkList, setCheckList] = useState<HelpContents>();
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);
  const navigate = useNavigate();

  const menu: IDetailOptions[] = [
    { name: '청약일정', option: 'schedule' },
    { name: '위치', option: 'location' },
  ];

  const onHeartClick = async () => {
    if (!cookies.AccessToken) {
      navigate('/login');
    } else {
      setHeartState(!heartState);
      const { data } = await axiosInstance.post(`api/like/`, {
        // TODO: 403 에러
        sub_id: subscription.id,
        name: subscription.houseName,
        end_date: subscription.applyEndDate,
        address: subscription.houseLocation,
      });
    }
  };

  useEffect(() => {
    if (loading || subscription == null) return;

    setCheckList({
      0: <DetailSchedule subData={subscription} />,
      1: <DetailLocation subData={subscription} />,
    });

    async function getYourLike() {
      const response = await axiosInstance.get(`api/like/${subscription.id}`);
      setHeartState(Boolean(response.status));
    }
    getYourLike();
  }, [loading, subscription]);

  return (
    <LayoutNavigation headerTitle="청약 상세">
      <div style={{ height: '196px', backgroundColor: '#777777' }}>
        {!loading && subscription ? (
          <>
            <img src={imgLink} width="100%" alt="picture" />
            <StyledLabel>{subscription.houseLocation.split(' ')[0]}</StyledLabel>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            불러오는 중이에요 잠시만 기다려주세요. 🌀
          </div>
        )}
      </div>

      <StyledWrapper>
        <StyledWrapper id="title">
          <StyledLocationWrapper onClick={() => navigate('/search')}>
            {subscription?.houseLocation?.split(' ')[0] ?? '...'}{' '}
            {subscription?.houseLocation?.split(' ')[1] ?? '...'}
          </StyledLocationWrapper>
          <StyledTitle>{subscription?.houseName ?? '...'}</StyledTitle>
          <StyledFlex>
            <StyledTag>{subscription?.applyScale ?? '...'}세대</StyledTag>
          </StyledFlex>
          <StyledFlex>
            <StyledDate>{subscription?.applyStartDate ?? '...'} 등록</StyledDate>
            <StyledHeartButton onClick={onHeartClick}>
              {heartState ? <BigHeart /> : <BigNullHeart />}
            </StyledHeartButton>
          </StyledFlex>
        </StyledWrapper>
        {checkList && <TabBar menu={menu} checkList={checkList} />}
      </StyledWrapper>
    </LayoutNavigation>
  );
};

export default Detail;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  &#title {
    margin: 1rem;
  }
`;

const StyledHeartButton = styled.button`
  display: flex;
  align-items: center;
  height: 1.5rem;
`;

const StyledLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${PALETTE.PRI_DARK_010};
  font-size: 0.9rem;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const StyledDate = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${PALETTE.DARK_020};
`;

const StyledTag = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: ${PALETTE.DARK_030};
  background-color: ${PALETTE.PRI_LIGHT_010};
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  color: ${PALETTE.BLACK};
  font-family: 'Pretendard-Bold';
  background-color: ${PALETTE.PRI_LIGHT_010};
  padding: 0.6rem 1.2rem 0.6rem 1rem;
  border-radius: 0 4px 4px 0;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
