import styled from 'styled-components';

import { SubscriptionUsedFront } from '../types';

export type DetailScheduleProps = {
  subData: SubscriptionUsedFront;
};

const DetailSchedule = ({ subData }: DetailScheduleProps) => {
  return (
    <StyledWrapper>
      <StyledLocationTitle>청약 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>{subData.recNotice}</li>
      </StyledLocationDetail>
      <StyledLocationTitle>특별공급 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>시작일: {subData.SPSPLY_RCEPT_BGNDE}</li>
        <li>종료일: {subData.SPSPLY_RCEPT_ENDDE}</li>
      </StyledLocationDetail>
      <StyledLocationTitle>1순위 접수일 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>해당지역 1순위 접수일: {subData.GNRL_RNK1_CRSPAREA_RCEPT_PD}</li>
        <li>경기지역 1순위 접수일: {subData.GNRL_RNK1_ETC_GG_RCPTDE_PD}</li>
        <li>기타지역 1순위 접수일: {subData.GNRL_RNK1_ETC_AREA_RCPTDE_PD}</li>
      </StyledLocationDetail>
      <StyledLocationTitle>2순위 접수일 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>해당지역 2순위 접수일: {subData.GNRL_RNK2_CRSPAREA_RCEPT_PD}</li>
        <li>경기지역 2순위 접수일: {subData.GNRL_RNK2_ETC_GG_RCPTDE_PD}</li>
        <li>기타지역 2순위 접수일: {subData.GNRL_RNK2_ETC_AREA_RCPTDE_PD}</li>
      </StyledLocationDetail>
      <StyledLocationTitle>당첨자 발표 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>당첨 발표일: {subData.PRZWNER_PRESNATN_DE}</li>
      </StyledLocationDetail>
      <StyledLocationTitle>계약 일정</StyledLocationTitle>
      <StyledLocationDetail>
        <li>계약 시작일: {subData.CNTRCT_CNCLS_BGNDE}</li>
        <li>계약 종료일: {subData.CNTRCT_CNCLS_ENDDE}</li>
      </StyledLocationDetail>
    </StyledWrapper>
  );
};

export default DetailSchedule;

const StyledWrapper = styled.div`
  margin: 1rem;
`;

const StyledLocationTitle = styled.div`
  font-family: 'Pretendard-Bold';
`;

const StyledLocationDetail = styled.div`
  font-family: 'Pretendard-Medium';
  margin-top: 1rem;
  margin-bottom: 2rem;

  & > li {
    margin: 10px;
  }
`;
