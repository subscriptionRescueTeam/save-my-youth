import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
  transition: all 1s ease;
  transform: ${(props) => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;

const StyledOptionItem = styled.button`
  width: 100%;
  height: 1.5rem;
  padding: 10px;
`;

type Option = {
  name: string;
  link: string;
};

export type SidebarProps = {
  isOpen: boolean;
  onSidebarOpen: (isOpen: boolean) => void;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const sidebarRef = useRef(null);

  const optionList: Array<Option> = [
    {
      name: '헬렌',
      link: '/',
    },
    {
      name: '알림 설정',
      link: '/',
    },
    {
      name: '좋아요',
      link: '/',
    },
  ];

  const onClickOutside = (event: any) => {
    if (sidebarRef.current && !(sidebarRef.current as any).contains(event.target)) {
      // TODO: change any type
      return onSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('click', onClickOutside, true);
    };
  });

  return (
    <StyledOptionList ref={sidebarRef} isOpen={isOpen}>
      {optionList.map((option) => (
        <Link key={`${option.name}-${option.link}`} to={option.link}>
          <StyledOptionItem>{option.name}</StyledOptionItem>
        </Link>
      ))}
    </StyledOptionList>
  );
};

export default Sidebar;
