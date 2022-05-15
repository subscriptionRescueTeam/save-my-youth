import styled from 'styled-components';

export const StyledInput = styled.input<{ margin: number }>`
  width: 80%;
  height: 20px;
  margin: ${(props) => props.margin};
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
