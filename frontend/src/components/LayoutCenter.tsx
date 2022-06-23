import styled from 'styled-components';

import { Children } from '../types';

export type LayoutCenterProps = {
  children: Children;
};

const LayoutCenter = ({ children }: LayoutCenterProps) => {
  return (
    <StyledLayoutCenter>
      <StyledContent>{children}</StyledContent>
    </StyledLayoutCenter>
  );
};

export default LayoutCenter;

export const StyledLayoutCenter = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
