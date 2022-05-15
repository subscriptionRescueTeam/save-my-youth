import styled from 'styled-components';
import { useState } from 'react';
import IconMenu from '../IconMenu';
import Sidebar from '../Sidebar';

export const StyledHeader = styled.header`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
`;

export const StyledTitle = styled.h5`
  font-size: 1rem;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
`;

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
        <StyledButtonContainer>
          <button>로그인</button>
          <button onClick={onClick}>
            <IconMenu size={20} />
          </button>
        </StyledButtonContainer>
      </StyledHeader>
      <Sidebar isOpen={isSidebarOpen}></Sidebar>
    </>
  );
};

export default Header;
