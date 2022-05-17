import { Link } from 'react-router-dom';
import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { useState } from 'react';

export type ArrowDirection = 'right' | 'down' | 'up';

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
      link: '/mypage',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
    },
    {
      name: '알림 설정',
      link: '/mypage',
      fontSize: '1rem',
      fontWeight: 'bold',
      underlineHeight: '2px',
    },
  ];

  const help: Record<string, Array<Option>> = {
    title: [
      {
        name: '고객센터',
        link: '',
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
      },
      {
        name: 'FAQ',
        link: '/',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
      },
      {
        name: '1:1 문의',
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

  const [helpClicked, setHelpClicked] = useState(false);

  const toggleHelp = () => {
    return setHelpClicked(!helpClicked);
  };

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
          >
            {option.name}
          </OptionItem>
        </Link>
      ))}

      <div id="accordion">
        <div id="고객센터" onClick={toggleHelp}>
          {help.title.map((option) => {
            const dynamicDirection = helpClicked ? 'up' : 'down';

            return (
              <Link key={`${option.name}-${option.link}`} to={option.link}>
                <OptionItem
                  fontSize={option.fontSize}
                  fontWeight={option.fontWeight}
                  underlineHeight={option.underlineHeight}
                  direction={dynamicDirection}
                  disabled={option.disabled}
                >
                  {option.name}
                </OptionItem>
              </Link>
            );
          })}
        </div>
        {helpClicked && (
          <div id="옵션">
            {help.option.map((option) => (
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
          </div>
        )}
      </div>

      {connection.map((option) => (
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
