import styled from 'styled-components';
import Picture from '../../asset/picture.png';
import { ArrowRight } from '../../asset';
import COLOR from '../../constants/color';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const StyledContentWrapper = styled.div`
  display: flex;
`;

const StyledLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.PRI_DARK_010};
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
  color: ${COLOR.DARK_020};
`;

const StyledImg = styled.img``;

const Detail = () => {
  return (
    <>
      <StyledImg src={Picture} width="100%" alt="picture" />
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLocationWrapper>
            서울특별시 <ArrowRight /> 강북구
          </StyledLocationWrapper>
          <StyledTitle>제 1차 장기전세주택 입주자모집공고</StyledTitle>
          <StyledDate>2022.05.15 등록</StyledDate>
        </StyledTitleWrapper>

        <StyledContentWrapper>
          <div>여기 탭 들어갈 예정</div>
        </StyledContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default Detail;
