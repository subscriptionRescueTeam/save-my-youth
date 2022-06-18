import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import PALETTE from '../../../constants/palette';
import { Children, OptionDecoration } from '../../../types';
import { useCookies } from 'react-cookie';
import ArrowRight from '../../../assets/icons/arrowRight';

const StyledContainer = styled.div<{ disabled?: boolean }>`
  width: 100%;
  position: relative;
  padding: 5px 0;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const StyledButton = styled.button<{ underlineHeight: string; disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 1rem 1.5rem;
  border-bottom: ${(props) => props.underlineHeight} solid ${PALETTE.LIGHT_010};
`;

const StyledSpan = styled.span<{ fontSize: string; fontFamily: string; fontColor: string }>`
  width: 100%;
  display: flex;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.fontColor};
`;

const StyledArrow = styled.div`
  display: flex;
`;

export type OptionItemProps = {
  children: Children;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isShownAlways?: boolean;
} & OptionDecoration;

const OptionItem = ({
  children,
  fontSize = '1rem',
  fontFamily = 'Pretendard-Medium',
  fontColor = '${PALETTE.BLACK}',
  underlineHeight = '0',
  direction = null,
  disabled = false,
  onClick,
  isShownAlways = false,
}: OptionItemProps) => {
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);

  const getArrowIcon = (direction: string) => {
    switch (direction) {
      case 'right':
        return <ArrowRight />;
      case 'down':
        return <ArrowDown />;
      case 'up':
        return <ArrowUp />;
      default:
        return <></>;
    }
  };

  return (
    <>
      {(isShownAlways || (!isShownAlways && cookies.AccessToken)) && (
        <StyledContainer>
          <StyledButton underlineHeight={underlineHeight} disabled={disabled} onClick={onClick}>
            <StyledSpan fontSize={fontSize} fontFamily={fontFamily} fontColor={fontColor}>
              {children}
            </StyledSpan>
            {direction && <StyledArrow>{getArrowIcon(direction)}</StyledArrow>}
          </StyledButton>
        </StyledContainer>
      )}
    </>
  );
};

export default OptionItem;
