import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Search } from '../assets/icons/search.svg';
import PALETTE from '../constants/palette';

export type InputPros = {
  color?: string;
  disabled?: boolean;
  margin?: string;
  multiline?: boolean;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
};

const Input = ({
  color,
  disabled = false,
  multiline = false,
  placeholder = '',
  onChange,
  onKeyPress,
}: InputPros) => {
  return (
    <StyledInputContainer>
      <Link to={{ pathname: `/search?` }}>
        <StyledInput
          color={color}
          disabled={disabled}
          multiple={multiline}
          placeholder={placeholder}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <StyledSearch>
          <Search />
        </StyledSearch>
      </Link>
    </StyledInputContainer>
  );
};

export default Input;

export const StyledInputContainer = styled.section`
  position: relative;
  width: 90%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  margin: 0 auto;
  border-radius: 8px;
  border: none;
  background-color: ${PALETTE.LIGHT_010};
  font-family: 'Pretendard-Medium';
  margin-bottom: 20px;
`;

export const StyledSearch = styled.div`
  position: absolute;
  top: 20%;
  right: 16px;
`;
