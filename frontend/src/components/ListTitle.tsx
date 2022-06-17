import styled from 'styled-components';
import PALETTE from '../constants/palette';
import { useNavigate } from 'react-router-dom';
import { ListType } from '../types';

export const StyledListTitle = styled.div<{ underline: boolean; color?: string }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  border-bottom: ${(props) => (props.underline ? '0.2rem' : 0)} solid
    ${(props) => (props.color ? props.color : PALETTE.WHITE)};
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
  type: ListType;
  more?: string;
  underline?: boolean;
};

const ListTitle = ({ type, more = '더보기', underline = false }: ListTitleProps) => {
  const navigate = useNavigate();
  return (
    <StyledListTitle underline={underline}>
      <StyledTitle>{type === 'popular' ? '인기 청약 BEST3' : '최신 청약 BEST3'}</StyledTitle>
      <StyledMore onClick={() => navigate(`/more/${type}`)}>{more}</StyledMore>
    </StyledListTitle>
  );
};

export default ListTitle;
