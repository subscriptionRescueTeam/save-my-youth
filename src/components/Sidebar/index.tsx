import { Link } from 'react-router-dom';
import OptionItem from './OptionItem';
import OptionList from './OptionList';

export type ArrowDirection = 'right' | 'down' | 'left' | 'up';

export type OptionDecoration = {
  fontSize?: string;
  fontWeight?: string;
  underlineHeight?: string;
  direction?: ArrowDirection | null;
  disabled?: boolean;
};

type Option = {
  name: string;
  link: string;
} & OptionDecoration;

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const optionList: Array<Option> = [
    {
      name: '제이미 님',
      link: '/',
      fontSize: '1rem',
      fontWeight: 'bold',
      direction: 'right',
    },
    {
      name: '늘 행운을 빌어요! :)',
      link: '/',
      fontSize: '0.875rem',
      underlineHeight: '4px',
      disabled: true,
    },
    {
      name: '좋아요',
      link: '/',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
    },
    {
      name: '알림 설정',
      link: '/',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
    },
    {
      name: '고객센터',
      link: '/',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
      direction: 'down',
    },
    {
      name: '공지사항',
      link: '/',
      fontSize: '0.875rem',
      underlineHeight: '2px',
      direction: 'right',
    },
    {
      name: '서비스해지',
      link: '/',
      fontSize: '0.875rem',
      underlineHeight: '8px',
      direction: 'right',
    },
    {
      name: '로그아웃',
      link: '/',
      fontSize: '1rem',
      underlineHeight: '2px',
    },
    {
      name: '연동해제',
      link: '/',
      fontSize: '1rem',
    },
  ];

  return (
    <OptionList onSidebarOpen={onSidebarOpen} isOpen={isOpen}>
      {optionList.map((option) => (
        <Link key={`${option.name}-${option.link}`} to={option.link}>
          <OptionItem
            fontSize={option.fontSize}
            fontWeight={option.fontWeight}
            underlineHeight={option.underlineHeight}
            direction={option.direction}
            disabled={option.disabled}
          >
            {option.name}
          </OptionItem>
        </Link>
      ))}
    </OptionList>
  );
};

export default Sidebar;
