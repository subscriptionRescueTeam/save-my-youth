import styled, { keyframes } from 'styled-components';
import PALETTE from '../constants/palette';
import { CARD_BORDER_RADIUS } from '../constants/variables';

const ApplyCardSkeleton = () => (
  <StyledCard>
    <StyledImage />
    <StyledTextContainer>
      <StyledTitle />
      <StyledLikeNumContainer>
        <StyledLikeNum />
      </StyledLikeNumContainer>
    </StyledTextContainer>
  </StyledCard>
);

export default ApplyCardSkeleton;

const skeletonLoading = keyframes`
0% {
    background-color: ${PALETTE.LIGHT_040};
  }

  100% {
    background-color: ${PALETTE.LIGHT_020};
  }
`;

const StyledCard = styled.div`
  width: 16.25rem;
  height: 12.125rem;
  border-radius: ${CARD_BORDER_RADIUS}px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  background-color: white;
`;

const StyledImage = styled.div`
  height: 7.75rem;
  border-radius: ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px 0 0;
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${PALETTE.LIGHT_010};
  border-radius: 0 0 ${CARD_BORDER_RADIUS}px ${CARD_BORDER_RADIUS}px;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  height: 1.5rem;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem 0.75rem;
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const StyledLikeNumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLikeNum = styled.div`
  width: 2rem;
  height: 1.125rem;
  margin-right: 0.5rem;
  opacity: 0.7;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
