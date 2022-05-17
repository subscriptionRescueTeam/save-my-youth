import styled from 'styled-components';

const Wrapper = styled.div`
  & + & {
    margin-top: 2rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-radius: 0px;
  font-size: 1rem;
  font-family: Pretendard-Regular;
`;

export type InputLabel = {
  label: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputLabel = ({ label, placeholder, onChange }: InputLabel) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input placeholder={placeholder} onChange={onChange} />
  </Wrapper>
);

export default InputLabel;
