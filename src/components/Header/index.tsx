import styled, { keyframes } from 'styled-components';
import { useCallback, useState } from 'react';
import { Alarm, Hamburger } from '../../asset';
import Sidebar from '../Sidebar';
import COLOR from '../../constants/color';

const colorAnimation = keyframes`
  0% {
    background: rgba(38, 38, 38, 0);
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

export const StyledDarkBody = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

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

export const StyledTitle = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${COLOR.PRI_DARK_020};
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
        <StyledTitle>{title}</StyledTitle>
        <StyledButtonContainer>
          <StyledAlarm>
            <Alarm />
          </StyledAlarm>
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
