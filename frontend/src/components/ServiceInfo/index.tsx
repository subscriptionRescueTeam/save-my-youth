import styled from 'styled-components';
import PALETTE from '../../constants/palette';

const StyledWrapper = styled.div`
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLocationTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 1.2rem;
`;

const StyledLocationDetail = styled.div`
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
          <span style={{ fontFamily: 'Pretendard-Bold' }}>"청년을 구해줘!"</span>는 청년들을 위한
          청약 정보를 한눈에 쉽게 살펴볼 수 있는 웹사이트입니다.
        </StyledLocationDetail>
        <StyledBar>─</StyledBar>
        <StyledLocationDetail>
          역세권 청년주택에 거주하고 있고, 앞으로 다른 곳으로 이사가고 싶어서 청약을 넣을 예정인
          청년,독립을 하고 싶은 청년, 부모와 떨어져서 성장할 수 있는 기회를 놓치지 않길 바라는 청년.
        </StyledLocationDetail>
        <StyledLocationDetail>
          이유는 다르지만 청년청약에 관심을 가지고 있습니다. 그렇지만 청약 공고가 올라오는 사이트가
          모두 달라 따로 찾아보아야 하게 때문에 청약 공고를 한 눈에 볼 수 있게 하는 사이트입니다
        </StyledLocationDetail>
      </StyledWrapper>
    </>
  );
};

export default ServiceInfo;
