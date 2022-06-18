import styled from 'styled-components';
import PALETTE from '../constants/palette';

const StyledButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${PALETTE.BLACK};
  background-color: ${PALETTE.LIGHT_010};
`;

const PopularButtons = () => {
  return <StyledButton>최신순</StyledButton>;
};

export default PopularButtons;
