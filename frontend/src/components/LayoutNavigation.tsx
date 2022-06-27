import { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { Children } from '../types';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export type LayoutNavigationProps = {
  headerTitle?: string;
  haederUnderline?: boolean;
  children: Children;
};

const LayoutNavigation = ({ headerTitle, haederUnderline, children }: LayoutNavigationProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIsSidebarOpen = useCallback((isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  }, []);

  const onClick = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, []);

  return (
    <>
      {isSidebarOpen && <StyledDarkBody isOpen={isSidebarOpen} />}
      <Header title={headerTitle} underline={haederUnderline} handleRightButtonClick={onClick} />
      <Sidebar isOpen={isSidebarOpen} onSidebarOpen={handleIsSidebarOpen} />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </>
  );
};

export default LayoutNavigation;

const colorAnimation = keyframes`
  0% {
    background: transparent;
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
