import styled from 'styled-components';
import COLOR from '../../constants/color';
import { Search } from '../../asset';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export const StyledInputContainer = styled.div`
  position: relative;
  width: 90%;
`;

export const StyledInput = styled.input<{ margin: number }>`
  width: 100%;
  padding: 1rem 1rem;
  margin: 0 auto;
  border-radius: 8px;
  border: none;
  background-color: ${COLOR.LIGHT_010};
  font-family: 'Pretendard-Medium';
  margin: ${(props) => props.margin};
  margin-bottom: 2rem;
  background-repeat: no-repeat;
  background-position: 99%;
`;

export const StyledSearch = styled.button`
  position: absolute;
  top: 20%;
  right: 16px;
`;

export type InputPros = {
  color?: string;
  disabled?: boolean;
  margin?: number;
  multiline?: boolean;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  color,
  disabled = false,
  margin = 2,
  multiline = false,
  placeholder = '',
  onChange,
}: InputPros) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledInputContainer>
      <StyledInput
        ref={inputRef}
        color={color}
        disabled={disabled}
        margin={margin}
        multiple={multiline}
        placeholder={placeholder}
        onChange={onChange}
      ></StyledInput>

      <Link to={{ pathname: `/search?${inputRef?.current?.value}` }}>
        <StyledSearch>
          <Search />
        </StyledSearch>
      </Link>
    </StyledInputContainer>
  );
};

export default Input;
