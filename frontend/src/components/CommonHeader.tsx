import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import Sidebar from './Sidebar';
import PALETTE from '../constants/palette';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Item = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: bold;
  margin-left: 0.7rem;
  margin-right: 1.3rem;
`;

const TitleItem = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

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
  color: ${PALETTE.PRI_DARK_020};
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

const CommonHeader = ({ title }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIsSidebarOpen = useCallback((isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  }, []);

  const onClick = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, []);
  const navigate = useNavigate();

  const clickBefore = () => {
    navigate('/');
  };

  return (
    <Container>
      <Item onClick={clickBefore}>
        <ArrowLeft />
      </Item>
      <TitleItem>{title}</TitleItem>
      <Item>
        <StyledBurger onClick={onClick}>
          <Hamburger />
        </StyledBurger>
      </Item>
      <Sidebar isOpen={isSidebarOpen} onSidebarOpen={handleIsSidebarOpen}></Sidebar>
    </Container>
  );
};

export default CommonHeader;
