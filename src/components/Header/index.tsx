import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { Alarm, Hamburger } from '../../asset';
// import IconMenu from '../IconMenu';
import Sidebar from '../Sidebar';
import COLOR from '../../constants/color';

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

const Header = ({ title }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleIsSidebarOpen = useCallback((isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  }, []);

  const onClick = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, []);

  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledButtonContainer>
          <StyledAlarm>
            <Alarm />
          </StyledAlarm>
          {/* <IconMenu size={20} /> */}
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
