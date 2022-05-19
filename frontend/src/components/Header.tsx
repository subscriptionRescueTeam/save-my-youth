import styled, { keyframes } from 'styled-components';
import { useCallback, useState } from 'react';
import { ReactComponent as ExclamationPoint } from '../assets/icons/exclamationPoint.svg';
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import Sidebar from './Sidebar';
import PALETTE from '../constants/palette';
import { useNavigate } from 'react-router-dom';

const colorAnimation = keyframes`
  0% {
    background: rgba(38, 38, 38, 0);
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

// ref: https://stackoverflow.com/questions/18588835/allow-a-div-to-cover-the-whole-page-instead-of-the-area-within-the-container
export const StyledDarkBody = styled.div<{ isOpen: boolean }>`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  // ref: https://stackoverflow.com/questions/4359627/stopping-a-css3-animation-on-last-frame
  animation: 1s ${colorAnimation} forwards;
`;

export const StyledHeader = styled.header`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.button`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${PALETTE.PRI_MAIN};
  margin-right: 3px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export const StyledAlarm = styled.button``;

export const StyledBurger = styled.button`
  margin-left: 0.5rem;
`;

export type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleIsSidebarOpen = useCallback((isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  }, []);

  const onClick = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, []);

  return (
    <>
      {isSidebarOpen && <StyledDarkBody isOpen={isSidebarOpen}></StyledDarkBody>}
      <StyledHeader>
        <StyledLogo onClick={() => navigate('/')}>
          <StyledTitle>{title}</StyledTitle>
          <ExclamationPoint />
        </StyledLogo>
        <StyledButtonContainer>
          <StyledBurger onClick={onClick}>
            <Hamburger />
          </StyledBurger>
        </StyledButtonContainer>
      </StyledHeader>
      <Sidebar isOpen={isSidebarOpen} onSidebarOpen={handleIsSidebarOpen}></Sidebar>
    </>
  );
};

export default Header;
