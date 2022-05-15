import styled from 'styled-components';

export const StyledListTitle = styled.div<{ underline: boolean; color?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  border-bottom: ${(props) => (props.underline ? '0.2rem' : 0)} solid
    ${(props) => (props.color ? props.color : '#DDDDDD')};
`;

export const StyledTitle = styled.span`
  font-size: 1.2rem;
`;

export const StyledMore = styled.button`
  font-size: 1rem;
`;

export type ListTitleProps = {
  title: string;
  more?: string;
  underline?: boolean;
};

const ListTitle = ({ title, more = '더보기', underline = false }: ListTitleProps) => {
  return (
    <StyledListTitle underline={underline}>
      <StyledTitle>{title}</StyledTitle>
      <StyledMore>{more}</StyledMore>
    </StyledListTitle>
  );
};

export default ListTitle;
