import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import PALETTE from '../constants/palette';
import Sidebar from './Sidebar';

export type HeaderProps = {
  title: string;
  underline?: boolean;
};

const CommonHeader = ({ title, underline = false }: HeaderProps) => {
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
    <>
      {isSidebarOpen && <StyledDarkBody isOpen={isSidebarOpen} />}
      <Container underline={underline}>
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
    </>
  );
};

export default CommonHeader;

const Container = styled.header<{ underline?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 0 ${PALETTE.LIGHT_010} solid;
  border-bottom-width: 4px;
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
    background: transparent;
  }

  100% {
    background: rgba(38, 38, 38, 0.3);
  }
`;

export const StyledDarkBody = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: 0.5s ${colorAnimation} forwards;
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
