import styled from 'styled-components';
import { ServiceMenu, CommonHeader } from '../../components';
import COLOR from '../../constants/color';

const StyledMenuWrap = styled.div``;

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
      <StyledMenuWrap>
        <CommonHeader title="My Page" />
        <ServiceMenu />
        <StyledFooter />
      </StyledMenuWrap>
    </>
  );
};

export default Mypage;
