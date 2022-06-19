import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import { ReactComponent as HeaderTitle } from '../assets/icons/headerTitle.svg';
import { Children } from '../types';
import Sidebar from './Sidebar';

export type LayoutNavigationProps = {
  children: Children;
};

const LayoutNavigation = ({ children }: LayoutNavigationProps) => {
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
      {isSidebarOpen && <StyledDarkBody isOpen={isSidebarOpen} />}
      <StyledHeader>
        <StyledLogo onClick={() => navigate('/')}>
          <HeaderTitle />
        </StyledLogo>
        <button onClick={onClick}>
          <Hamburger />
        </button>
      </StyledHeader>
      <Sidebar isOpen={isSidebarOpen} onSidebarOpen={handleIsSidebarOpen} />
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default LayoutNavigation;

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const colorAnimation = keyframes`
  0% {
    background: transparent;
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

const StyledDarkBody = styled.div<{ isOpen: boolean }>`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  animation: 0.5s ${colorAnimation} forwards;
`;

const StyledHeader = styled.header`
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.button`
  display: flex;
  align-items: center;
`;
