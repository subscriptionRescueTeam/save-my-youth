import ErrorNotFound from '@assets/images/errorNotFound.gif';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PALETTE from '@constants/palette';
import { LayoutNavigation } from '@components';

const StyledImg = styled.img`
  margin-top: 2rem;
`;

const StyledText = styled.div`
  padding-top: 6px;
`;

const StyledButton = styled.button`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 1.5rem 0;
  border: none;
  padding-bottom: 1rem;
  width: 40%;
  color: white;
  font-size: 1rem;
  border-radius: 12px;
  background: ${PALETTE.PRI_MAIN};
  font-family: 'Pretendard-Regular';
  cursor: pointer;
  user-select: none;
  transition: 0.3s all;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <LayoutNavigation>
      <StyledImg src={ErrorNotFound} width="100%" alt="errornotfound" />
      <StyledText>요청하신 페이지를 찾을 수 없어요.</StyledText>
      <StyledText>올바른 주소로 접속하셨나요?</StyledText>
      <StyledButton onClick={() => navigate('/')}>홈으로 돌아가기</StyledButton>
    </LayoutNavigation>
  );
};

export default NotFound;
