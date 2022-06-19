import styled from 'styled-components';

import { LayoutNavigation, ServiceMenu } from '../components';
import PALETTE from '../constants/palette';

const StyledMenuWrap = styled.div``;

const StyledFooter = styled.div`
  position: absolute;
  height: 10rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: ${PALETTE.LIGHT_020};
  z-index: -1;
`;

const Mypage = () => {
  return (
    <>
      <StyledMenuWrap>
        <LayoutNavigation headerTitle="My Page">
          <ServiceMenu />
          <StyledFooter />
        </LayoutNavigation>
      </StyledMenuWrap>
    </>
  );
};

export default Mypage;
