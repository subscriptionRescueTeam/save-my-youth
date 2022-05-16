import styled from 'styled-components';
import { Location } from '../../asset';
import COLOR from '../../constants/color';

const StyledWrapper = styled.div`
  margin: 1rem;
`;

const StyledLocationTitle = styled.div`
  font-family: 'Pretendard-Bold';
  margin-bottom: 1rem;
`;

const StyledLocationDetail = styled.div`
  font-family: 'Pretendard-SemiBold';
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 2rem;
`;

const StyledLocationButton = styled.button`
  font-size: 1rem;
  width: 100%;
  font-family: 'Pretendard-Bold';
  margin-bottom: 1rem;
  background-color: ${COLOR.PRI_LIGHT_020};
  border: none;
  padding: 2rem 0;
  border-radius: 8px;
`;

const SaleSchedule = () => {
  return (
    <StyledWrapper>
      <StyledLocationTitle>위치</StyledLocationTitle>
      <StyledLocationDetail>
        <Location />
        서울특별시 강북구 미아동 423-3
      </StyledLocationDetail>
      <StyledLocationButton>지도 바로가기</StyledLocationButton>
    </StyledWrapper>
  );
};

export default SaleSchedule;
