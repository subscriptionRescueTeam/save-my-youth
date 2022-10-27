import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '@constants/palette';
import Accordion from '../Accordion';
import OptionItem from './OptionItem';
import OptionList from './OptionList';
import { AccordionType, Option } from '@types';

export type SidebarProps = {
  onSidebarOpen: (isOpen: boolean) => void;
  isOpen: boolean;
};

const StyledUserName = styled.span`
  border-bottom: 1px solid ${PALETTE.BLACK};
`;

const StyledLogin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  font-family: 'Pretendard-semiBold';
  background: ${PALETTE.PRI_LIGHT_010};
`;

const Sidebar = ({ onSidebarOpen, isOpen }: SidebarProps) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    'AccessToken',
    'RefreshToken',
    'UserInfo',
  ]);

  const userName = cookies.AccessToken
    ? cookies['UserInfo']['last_name'] + cookies['UserInfo']['first_name']
    : null;

  const userSetting: Option[] = [
    {
      userName: `${userName}`,
      optionName: ` 님`,
      link: userName ? '/mypage' : '/login',
      fontSize: '1rem',
      fontFamily: 'Pretendard-Bold',
      isShownAlways: true,
    },
    {
      optionName: '늘 행운을 빌어요! :)',
      link: '/',
      fontSize: '0.875rem',
      underlineHeight: '4px',
      disabled: true,
      isShownAlways: true,
    },
    {
      optionName: '좋아요',
      link: '/like',
      fontSize: '1rem',
      fontFamily: 'Pretendard-Bold',
      underlineHeight: '2px',
    },
  ];

  const help: AccordionType = {
    head: {
      optionName: '고객센터',
      link: '/',
      fontSize: '1rem',
      fontFamily: 'Pretendard-Bold',
      underlineHeight: '2px',
      isUseBoldUnderline: true,
      isShownAlways: true,
    },
    tails: [
      {
        optionName: '공지사항',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isShownAlways: true,
      },
      {
        optionName: 'FAQ',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isShownAlways: true,
      },
      {
        optionName: '1:1 문의',
        link: '/help',
        fontSize: '0.875rem',
        underlineHeight: '2px',
        direction: 'right',
        isShownAlways: true,
      },
    ],
  };

  const connection: Option[] = [
    {
      optionName: '로그아웃',
      link: '/',
      fontSize: '1rem',
      underlineHeight: '2px',
      onClick: () => {
        removeCookie('AccessToken');
        removeCookie('RefreshToken');
        removeCookie('UserInfo');
        onSidebarOpen(false);
      },
    },
  ];

  return (
    <OptionList onSidebarOpen={onSidebarOpen} isOpen={isOpen}>
      {userSetting.map((option, index) => (
        <Link key={`${option.optionName}-${option.link}`} to={option.link}>
          <OptionItem
            fontSize={option.fontSize}
            fontFamily={option.fontFamily}
            fontColor={option.fontColor}
            underlineHeight={option.underlineHeight}
            direction={option.direction}
            disabled={option.disabled}
            isShownAlways={option.isShownAlways}
          >
            {index !== 0 && (
              <>
                <StyledUserName>{option.userName}</StyledUserName>
                {option.optionName}
              </>
            )}
            {index === 0 && userName && (
              <>
                <StyledUserName>{option.userName}</StyledUserName>
                {option.optionName}
              </>
            )}
            {index === 0 && !userName && <StyledLogin>로그인</StyledLogin>}
          </OptionItem>
        </Link>
      ))}

      <Accordion contents={help} />

      {connection.map((option) => (
        <Link key={`${option.optionName}-${option.link}`} to={option.link}>
          <OptionItem
            fontSize={option.fontSize}
            fontFamily={option.fontFamily}
            fontColor={`${PALETTE.DARK_030}`}
            underlineHeight={option.underlineHeight}
            direction={option.direction}
            disabled={option.disabled}
            onClick={option.onClick}
            isShownAlways={option.isShownAlways}
          >
            {option.optionName}
          </OptionItem>
        </Link>
      ))}
    </OptionList>
  );
};

export default Sidebar;
