import styled from 'styled-components';

const StyledOptionItem = styled.button`
  width: 100%;
  height: 1.5rem;
  padding: 1rem 1.5rem 1rem 1.5rem;
`;

export type OptionItemProps = {
  children: React.ReactNode;
};

const OptionItem = ({ children }: OptionItemProps) => {
  return <StyledOptionItem>{children}</StyledOptionItem>;
};

export default OptionItem;
