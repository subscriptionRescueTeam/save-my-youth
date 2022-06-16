import styled from 'styled-components';
import Picture from '../assets/images/picture2.png';
import { ReactComponent as BigHeart } from '../assets/icons/bigHeart.svg';
import { ReactComponent as BigNullHeart } from '../assets/icons/bigNullHeart.svg';
import PALETTE from '../constants/palette';
import { DetailSchedule, DetailLocation, TabBar, CommonHeader } from '../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { DetailState, HelpContents, IDetailOptions } from '../types';
import { useEffect, useState } from 'react';
import ArrowRight from '../assets/icons/arrowRight';
import { useCookies } from 'react-cookie';
import axiosInstance from '../utils/axiosInstance';
import useSubscription from '../hooks/useSubscription';

const Detail = () => {
  const location = useLocation();
  const state = location.state as DetailState;
  const { id } = state;

  const { loading, subscriptions } = useSubscription('id', '', id);
  const subscription = subscriptions[0];

  console.log(subscription);

  const [heartState, setHeartState] = useState(true);
  const [checkList, setCheckList] = useState<HelpContents>();
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);
  const navigate = useNavigate();

  const menu: IDetailOptions[] = [
    { name: '청약일정', option: 'schedule' },
    { name: '위치', option: 'location' },
  ];

  const onHeartClick = async () => {
    if (cookies.AccessToken) {
      setHeartState(!heartState);
      const { data } = await axiosInstance.post(`api/like/`, {
        sub_id: subscription.id,
        name: subscription.houseName,
        end_date: subscription.applyEndDate,
        address: subscription.houseLocation,
      });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    if (loading || subscription == null) return;
    setCheckList({
      0: <DetailSchedule subData={subscription} />,
      1: <DetailLocation subData={subscription} />,
    });
  }, [loading, subscription]);

  useEffect(() => {
    // async function getYourLike() {
    //   const { data } = await axiosInstance.get(`api/like/${subscription.id}`);
    //   setHeartState(data.status);
    // }
    // getYourLike();
  }, [axiosInstance, subscription]);

  return (
    <>
      <CommonHeader title="청약 상세" />
      {loading && <div>불러오는 중이에요 잠시만 기다려주세요.</div>}
      {!loading && subscription && (
        <>
          <img src={Picture} width="100%" alt="picture" />
          <StyledLabel>{subscription.houseLocation.split(' ')[0]}</StyledLabel>
          <StyledWrapper>
            <StyledWrapper id="title">
              <StyledLocationWrapper onClick={() => navigate('/search')}>
                {subscription.houseLocation.split(' ')[0]} <ArrowRight />{' '}
                {subscription.houseLocation.split(' ')[1]}
              </StyledLocationWrapper>
              <StyledTitle>{subscription.houseName}</StyledTitle>
              <StyledFlex>
                <StyledTag>{subscription.applyScale}세대</StyledTag>
              </StyledFlex>
              <StyledFlex>
                <StyledDate>{subscription.applyStartDate} 등록</StyledDate>
                <StyledHeartButton onClick={onHeartClick}>
                  {heartState ? <BigNullHeart /> : <BigHeart />}
                </StyledHeartButton>
              </StyledFlex>
            </StyledWrapper>
            {checkList && <TabBar menu={menu} checkList={checkList} />}
          </StyledWrapper>
        </>
      )}
    </>
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
