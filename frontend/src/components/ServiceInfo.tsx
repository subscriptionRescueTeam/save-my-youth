import styled from 'styled-components';

import PALETTE from '../constants/palette';

const ServiceInfo = () => {
  return (
    <>
      <img
        src="https://camo.githubusercontent.com/22ff7f89a5bd960b40b0d0daaec084592ff50e3cc5b3a4b7404724a6a199510e/68747470733a2f2f692e696d6775722e636f6d2f6c4773476e45392e706e67"
        width="100%"
      />
      <StyledWrapper>
        <StyledLocationTitle>프로젝트 개요</StyledLocationTitle>
        <StyledLocationDetail>
          <span style={{ fontFamily: 'Pretendard-Bold' }}>&quot;청년을 구해줘!&quot;</span>는
          청년들이 신청할 수 있는 청약을 보여주는 웹사이트입니다.
        </StyledLocationDetail>
        <StyledBar>─</StyledBar>
        <StyledLocationDetail>
          우리는 독립을 원하는 청년이 보다 저렴한 가격에 안전한 곳에 머물기를 바라는 마음으로 이
          사이트를 제작하였습니다.
        </StyledLocationDetail>
        <StyledLocationDetail>
          청약 공고가 여기저기 흩어져 있어 다 찾아보고 계시나요? 혹은 청약이 뭔지도 모르겠다고요? 이
          사이트 안에서 답을 찾아보세요!
        </StyledLocationDetail>
      </StyledWrapper>
    </>
  );
};

export default ServiceInfo;
const StyledWrapper = styled.div`
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLocationTitle = styled.h1`
  font-family: 'Pretendard-Bold';
  font-size: 1.2rem;
`;

const StyledLocationDetail = styled.h2`
  font-family: 'Pretendard-Medium';
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
`;

const StyledBar = styled.div`
  font-family: 'Pretendard-Medium';
  font-size: 2rem;
  color: ${PALETTE.PRI_LIGHT_020};
`;
