import { useState } from 'react';
import IconMenu from '../IconMenu';
import Sidebar from '../Sidebar';
import * as S from './index.styled';

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <S.header>
      {title}
      <button>로그인</button>
      <button onClick={onClick}>
        <IconMenu size={20} />
      </button>
      <Sidebar isOpen={isSidebarOpen}></Sidebar>
    </S.header>
  );
};

export default Header;
