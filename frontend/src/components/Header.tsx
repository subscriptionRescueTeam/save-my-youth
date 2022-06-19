import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '../constants/palette';
import { IconName } from '../types';
import { Icon } from './Icon';

export type HeaderProps = {
  title?: string;
  underline?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  handleRightButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({
  title,
  underline = false,
  leftIcon = 'arrowLeft',
  rightIcon = 'hamburger',
  handleRightButtonClick,
}: HeaderProps) => {
  const navigate = useNavigate();

  const onLogoClick = () => navigate('/');

  return (
    <StyledHeader underline={underline}>
      {title && (
        <>
          <button onClick={() => navigate(-1)}>
            <Icon name={leftIcon} />
          </button>
          <StyledPageName>{title}</StyledPageName>
        </>
      )}

      {!title && (
        <StyledLogo onClick={onLogoClick}>
          <Icon name="headerTitle" width={154.74} height={30} />
        </StyledLogo>
      )}
      <button onClick={handleRightButtonClick}>
        <Icon name={rightIcon} />
      </button>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<{ underline?: boolean }>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 0 ${PALETTE.LIGHT_010} solid;
  border-bottom-width: ${(props) => (props.underline ? '4px' : 0)};
`;

const StyledLogo = styled.button`
  display: flex;
  align-items: center;
`;

const StyledPageName = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
