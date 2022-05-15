import styled from 'styled-components';
import COLOR from '../../constants/color';

export const StyledInput = styled.input<{ margin: number }>`
  width: 90%;
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
  return (
    <StyledInput
      color={color}
      disabled={disabled}
      margin={margin}
      multiple={multiline}
      placeholder={placeholder}
      onChange={onChange}
    ></StyledInput>
  );
};

export default Input;
