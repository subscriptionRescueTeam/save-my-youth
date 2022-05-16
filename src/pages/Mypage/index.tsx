import { Title, LayoutNavigation, Header } from '../../components';
import styled from 'styled-components';
import ServiceMenu from '../../components/ServiceMenu';
import COLOR from '../../constants/color';
import CommonHeader from '../../components/CommonHeader';

const StyledUserInfoWrap = styled.div``;

const StyledFooter = styled.div`
  position: absolute;
  height: 10rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${COLOR.LIGHT_020};
`;

const Mypage = () => {
  return (
    <>
      <StyledUserInfoWrap>
        <CommonHeader title="My Page" />
        <ServiceMenu />
        <StyledFooter />
      </StyledUserInfoWrap>
    </>
  );
};

export default Mypage;
