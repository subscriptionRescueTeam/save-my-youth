import { Link } from 'react-router-dom';
import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { AccordionType, Option } from '../../types';
import Accordion from '../Accordion';

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const userSetting: Option[] = [
    {
      name: '사용자 님',
      link: '/mypage',
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
      link: '/like',
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
      isGetReady: true,
    },
  ];

  const help: AccordionType = {
    head: {
      name: '고객센터',
      link: '/',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
    },
    tails: [
      {
        name: '공지사항',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
      },
      {
        name: 'FAQ',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
      },
      {
        name: '1:1 문의',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
      },
    ],
  };

  const connection: Option[] = [
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
      {userSetting.map((option) => (
        <Link key={`${option.name}-${option.link}`} to={option.link}>
          <OptionItem
            fontSize={option.fontSize}
            fontWeight={option.fontWeight}
            underlineHeight={option.underlineHeight}
            direction={option.direction}
            disabled={option.disabled}
            isGetReady={option.isGetReady}
          >
            {option.name}
          </OptionItem>
        </Link>
      ))}

      <Accordion contents={help} />

      {connection.map((option) => (
        <Link key={`${option.name}-${option.link}`} to={option.link}>
          <OptionItem
            fontSize={option.fontSize}
            fontWeight={option.fontWeight}
            underlineHeight={option.underlineHeight}
            direction={option.direction}
            disabled={option.disabled}
            isGetReady={option.isGetReady}
          >
            {option.name}
          </OptionItem>
        </Link>
      ))}
    </OptionList>
  );
};

export default Sidebar;
