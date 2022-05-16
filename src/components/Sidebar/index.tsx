import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OptionItem from './OptionItem';
import OptionList from './OptionList';

type Option = {
  name: string;
  link: string;
};

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
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
    <OptionList onSidebarOpen={onSidebarOpen} isOpen={isOpen}>
      {optionList.map((option) => (
        <Link key={`${option.name}-${option.link}`} to={option.link}>
          <OptionItem>{option.name}</OptionItem>
        </Link>
      ))}
    </OptionList>
  );
};

export default Sidebar;
