import styled from 'styled-components';

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

const DetailSchedule = ({ subData }: any) => {
  return (
    <StyledWrapper>
      <StyledLocationTitle>청약 일정</StyledLocationTitle>
      <StyledLocationDetail>{subData.houseLocation}</StyledLocationDetail>
    </StyledWrapper>
  );
};

export default DetailSchedule;
