import styled from 'styled-components';
import { OptionDecoration } from '..';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrowRight.svg';
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrowDown.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icons/arrowUp.svg';
import { COLOR } from '../../../constants';

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
`;

const StyledButton = styled.button<{
  underlineHeight: string;
}>`
  width: 100%;
  height: 3.5rem;
  text-align: left;
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-bottom: ${(props) => props.underlineHeight} solid ${COLOR.LIGHT_010};
`;

const StyledSpan = styled.span<{
  fontSize: string;
  fontWeight: string;
}>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const StyledArrow = styled.div`
  position: absolute;
  top: 20%;
  right: 16px;
`;

export type OptionItemProps = {
  children: React.ReactNode;
  isGetReady?: boolean;
} & OptionDecoration;

const OptionItem = ({
  children,
  fontSize = '1rem',
  fontWeight = 'regular',
  underlineHeight = '0',
  direction = null,
  disabled = false,
  isGetReady = false,
}: OptionItemProps) => {
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
    <StyledContainer>
      <StyledButton
        underlineHeight={underlineHeight}
        disabled={disabled}
        onClick={() => {
          isGetReady && alert('준비 중인 서비스입니다.');
        }}
      >
        <StyledSpan fontSize={fontSize} fontWeight={fontWeight}>
          {children}
        </StyledSpan>
      </StyledButton>
      {direction && <StyledArrow>{getArrowIcon(direction)}</StyledArrow>}
    </StyledContainer>
  );
};

export default OptionItem;
