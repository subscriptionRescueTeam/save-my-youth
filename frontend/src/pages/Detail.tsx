import styled from 'styled-components';
import Picture from '../assets/images/picture2.png';
import { ReactComponent as BigHeart } from '../assets/icons/bigHeart.svg';
import { ReactComponent as BigNullHeart } from '../assets/icons/bigNullHeart.svg';
import PALETTE from '../constants/palette';
import { DetailSchedule, DetailLocation, TabBar, CommonHeader } from '../components';
import { useNavigate } from 'react-router-dom';
import { HelpContents, IDetailOptions } from '../types';
import { useEffect, useState } from 'react';
import ArrowRight from '../assets/icons/arrowRight';
import { useCookies } from 'react-cookie';
import axiosInstance from '../utils/axiosInstance';
import useSubscription from '../hooks/useSubscription';

export const tempData = {
  applyEndDate: '2020-06-10',
  applyHomepage: 'http://leel-sinbanpo-parkavenue.co.kr/',
  applyScale: 98,
  applyStartDate: '2020-06-08',
  houseLocation: '서울특별시 서초구 강남대로107길 14 (잠원동)',
  houseName: '르엘 신반포 파크애비뉴',
  id: 2020000651,
  recNotice: '2020-05-28',
  SPSPLY_RCEPT_BGNDE: '2020-05-28', //특별공급 접수시작일
  SPSPLY_RCEPT_ENDDE: '2020-07-28', //특별공급 접수 종료일
  GNRL_RNK1_CRSPAREA_RCEPT_PD: '2020-05-28', //1순위 접수일 해당지역
  GNRL_RNK1_ETC_GG_RCPTDE_PD: '2020-05-29', //1순위 접수일 경기지역
  GNRL_RNK1_ETC_AREA_RCPTDE_PD: '2020-06-08', //1순위 접수일 기타지역
  GNRL_RNK2_CRSPAREA_RCEPT_PD: '2020-06-07', //2순위 접수일 해당지역
  GNRL_RNK2_ETC_GG_RCPTDE_PD: '2020-05-28', //2순위 접수일 경기지역
  GNRL_RNK2_ETC_AREA_RCPTDE_PD: '2020-05-30', //2순위 접수일 기타지역
  PRZWNER_PRESNATN_DE: '2020-07-01', //당첨자발표일
  CNTRCT_CNCLS_BGNDE: '2020-07-02', //계약시작일
  CNTRCT_CNCLS_ENDDE: '2020-07-05', //계약종료일
};

const Detail = () => {
  const tempCheck = useSubscription();
  const [heartState, setHeartState] = useState(true);
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);
  const navigate = useNavigate();

  const menu: IDetailOptions[] = [
    { name: '청약일정', option: 'schedule' },
    { name: '위치', option: 'location' },
  ];
  const checkList: HelpContents = {
    0: <DetailSchedule subData={tempData} />,
    1: <DetailLocation subData={tempData} />,
  };

  console.log(tempCheck);

  const onHeartClick = async () => {
    if (cookies.AccessToken) {
      setHeartState(!heartState);
      const { data } = await axiosInstance.post(`api/like/`, {
        sub_id: tempData.id,
        name: tempData.houseName,
        end_date: tempData.applyEndDate,
        address: tempData.houseLocation,
      });
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    // 얘 때문인 거 같아요
    async function getYourLike() {
      const { data } = await axiosInstance.get(`api/like/${tempData.id}`);
      console.log(data);
      setHeartState(data.status);
    }
    getYourLike();
  }, [axiosInstance, tempData]);

  return (
    <>
      <CommonHeader title="청약 상세" />
      <img src={Picture} width="100%" alt="picture" />
      <StyledLabel>{tempData.houseLocation.split(' ')[0]}</StyledLabel>
      <StyledWrapper>
        <StyledWrapper id="title">
          <StyledLocationWrapper onClick={() => navigate('/search')}>
            {tempData.houseLocation.split(' ')[0]} <ArrowRight />{' '}
            {tempData.houseLocation.split(' ')[1]}
          </StyledLocationWrapper>
          <StyledTitle>{tempData.houseName}</StyledTitle>
          <StyledFlex>
            <StyledTag>{tempData.applyScale}세대</StyledTag>
          </StyledFlex>
          <StyledFlex>
            <StyledDate>{tempData.applyStartDate} 등록</StyledDate>
            <StyledHeartButton onClick={onHeartClick}>
              {heartState ? <BigNullHeart /> : <BigHeart />}
            </StyledHeartButton>
          </StyledFlex>
        </StyledWrapper>
        <TabBar menu={menu} checkList={checkList} />
      </StyledWrapper>
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