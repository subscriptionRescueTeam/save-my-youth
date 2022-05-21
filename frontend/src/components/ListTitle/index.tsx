import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { useNavigate } from 'react-router-dom';

export const StyledListTitle = styled.div<{ underline: boolean; color?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  border-bottom: ${(props) => (props.underline ? '0.2rem' : 0)} solid
    ${(props) => (props.color ? props.color : '#DDDDDD')};
  margin: 1rem 0;
`;

export const StyledTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledMore = styled.button`
  font-size: 0.9rem;
  border: none;
  background-color: ${PALETTE.WHITE};
  color: ${PALETTE.PRI_DARK_020};
  font-family: 'Pretendard-Medium';
  cursor: pointer;
`;

export type ListTitleProps = {
  title: string;
  more?: string;
  underline?: boolean;
};

const ListTitle = ({ title, more = '더보기', underline = false }: ListTitleProps) => {
  const navigate = useNavigate();
  return (
    <StyledListTitle underline={underline}>
      <StyledTitle>{title}</StyledTitle>
      <StyledMore onClick={() => navigate('/search')}>{more}</StyledMore>
    </StyledListTitle>
  );
};

export default ListTitle;
