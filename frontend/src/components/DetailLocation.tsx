import styled from 'styled-components';
import { ReactComponent as Location } from '../assets/icons/location.svg';
import PALETTE from '../constants/palette';

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
  background-color: ${PALETTE.PRI_LIGHT_020};
  border: none;
  padding: 2rem 0;
  border-radius: 8px;
`;

const DetailLocation = ({ subData }: any) => {
  return (
    <StyledWrapper>
      <StyledLocationTitle>위치</StyledLocationTitle>
      <StyledLocationDetail>
        <Location />
        {subData.houseLocation}
      </StyledLocationDetail>
      <StyledLocationButton
        onClick={() => window.open(`https://map.naver.com/v5/search/${subData.houseLocation}`)}
      >
        지도 바로가기
      </StyledLocationButton>
    </StyledWrapper>
  );
};

export default DetailLocation;
