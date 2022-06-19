import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '../constants/palette';
import { IconName } from '../types';
import { Icon } from './Icon';

export type HeaderProps = {
  title?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  handleRightButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({
  title,
  leftIcon = 'arrowLeft',
  rightIcon = 'hamburger',
  handleRightButtonClick,
}: HeaderProps) => {
  const navigate = useNavigate();

  const onLogoClick = () => navigate('/');

  return (
    <StyledHeader>
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
  width: 90%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
