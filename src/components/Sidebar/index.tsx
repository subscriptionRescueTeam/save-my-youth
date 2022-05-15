import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledOptionList = styled.aside<{ isOpen: boolean }>`
  width: 100%;
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
};

const Sidebar = ({ isOpen }: SidebarProps) => {
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

  return (
    <StyledOptionList isOpen={isOpen}>
      {optionList.map((option) => (
        <Link key={`{option.name}__{option.link}`} to={option.link}>
          <StyledOptionItem>{option.name}</StyledOptionItem>
        </Link>
      ))}
    </StyledOptionList>
  );
};

export default Sidebar;
