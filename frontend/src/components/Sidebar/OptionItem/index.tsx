import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import PALETTE from '../../../constants/palette';
import { Children, OptionDecoration } from '../../../types';
import { useCookies } from 'react-cookie';
import ArrowRight from '../../../assets/icons/arrowRight';

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledButton = styled.button<{
  underlineHeight: string;
  disabled?: boolean;
}>`
  width: 100%;
  height: 3.5rem;
  text-align: left;
  padding: 1rem 1.5rem;
  border-bottom: ${(props) => props.underlineHeight} solid ${PALETTE.LIGHT_010};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

const StyledSpan = styled.span<{
  fontSize: string;
  fontWeight: string;
  fontColor: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
`;

const StyledArrow = styled.div`
  position: absolute;
  top: 20%;
  right: 16px;
`;

export type OptionItemProps = {
  children: Children;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isShownAlways?: boolean;
} & OptionDecoration;

const OptionItem = ({
  children,
  fontSize = '1rem',
  fontWeight = 'regular',
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
    (isShownAlways || (!isShownAlways && cookies.AccessToken)) && (
      <StyledContainer>
        <StyledButton underlineHeight={underlineHeight} disabled={disabled} onClick={onClick}>
          <StyledSpan fontSize={fontSize} fontWeight={fontWeight} fontColor={fontColor}>
            {children}
          </StyledSpan>
        </StyledButton>
        {direction && <StyledArrow>{getArrowIcon(direction)}</StyledArrow>}
      </StyledContainer>
    )
  );
};

export default OptionItem;
