import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '../constants/palette';

const TodaySubscriptionNull = () => {
  return (
    <StyledCard>
      <StyledCommentContainer>
        <StyledComment>오늘은 올라온 공고가 더 이상 없네요</StyledComment>
        <StyledComment>제일 빠른 공고를 둘러볼까요?</StyledComment>
      </StyledCommentContainer>
      <Link to="/search">
        <StyledButton>최신 공고 보러가기</StyledButton>
      </Link>
    </StyledCard>
  );
};

export default TodaySubscriptionNull;

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 16.25rem;
  height: 12.125rem;
  background: rgba(171, 210, 254, 0.2);
  border-radius: 8px;
`;

export const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 23px;
`;

export const StyledComment = styled.span`
  font-size: 0.875rem;
  color: ${PALETTE.PRI_DARK_020};
  margin-bottom: 9px;
`;

export const StyledButton = styled.button`
  color: ${PALETTE.WHITE};
  background: ${PALETTE.PRI_MAIN};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: 'Pretendard-Bold';
`;
