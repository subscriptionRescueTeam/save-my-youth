import { Link } from 'react-router-dom';
import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { Option } from '../../types';
import Accordion from '../Accordion';

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const userSetting: Array<Option> = [
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

  const help: Record<string, Array<Option>> = {
    title: [
      {
        name: '고객센터',
        link: '/',
        fontSize: '1rem',
        fontWeight: 'bold',
        underlineHeight: '2px',
      },
    ],
    option: [
      {
        name: '공지사항',
        link: '/',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isGetReady: true,
      },
      {
        name: 'FAQ',
        link: '/',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isGetReady: true,
      },
      {
        name: '1:1 문의',
        link: '/',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isGetReady: true,
      },
    ],
  };

  const connection: Array<Option> = [
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

      <Accordion options={help} />

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
