import { Title, LayoutNavigation } from '../../components';
import styled from 'styled-components';
import ServiceMenu from '../../components/ServiceMenu';

const StyledUserInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  flex-direction: row;
`;

const StyledLike = styled.span`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  margin-left: 20px;
  height: 50px;
`;

const Mypage = () => {
  return (
    <>
      <StyledUserInfoWrap>
        <StyledName>
          <Title title="퉁이리" subTitle="wer4272@nate.com" />
        </StyledName>
        <StyledButton>로그아웃</StyledButton>
      </StyledUserInfoWrap>
      <StyledLike>
        <Title title="" subTitle="좋아요 (10건)" />
      </StyledLike>
      <ServiceMenu></ServiceMenu>
    </>
  );
};

export default Mypage;
