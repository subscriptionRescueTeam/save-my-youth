import styled from 'styled-components';

import PALETTE from '../constants/palette';
import { Children } from '../types';

export type IndexingProps = {
  children: Children;
  activate?: boolean;
  index: number;
};

const Indexing = ({ children, activate = true, index }: IndexingProps) => (
  <StyledContainer>
    {activate && <StyledIndex index={index}>{index}</StyledIndex>}
    {children}
  </StyledContainer>
);

export default Indexing;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 24px;
`;

const StyledIndex = styled.span<{ index: number }>`
  font-family: 'Noto Sans';
  font-weight: ${(props) => (props.index > 3 ? 'normal' : 'bold')};
  font-size: '1.25rem';
  line-height: 190%;
  letter-spacing: -0.5px;
  color: ${(props) => (props.index > 3 ? PALETTE.DARK_030 : PALETTE.PRI_DARK_020)};
`;
