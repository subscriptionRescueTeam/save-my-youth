import * as S from './index.styled';

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
    <S.Input
      color={color}
      disabled={disabled}
      margin={margin}
      multiple={multiline}
      placeholder={placeholder}
      onChange={onChange}
    ></S.Input>
  );
};

export default Input;
