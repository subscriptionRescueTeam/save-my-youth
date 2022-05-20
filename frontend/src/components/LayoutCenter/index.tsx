import styled from 'styled-components';
import { Children } from '../../types';

export const StyledLayoutCenter = styled.div<{ backgroundColor: string }>`
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: backgroundColor;
`;

export const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export type LayoutCenterProps = {
  children: Children;
  backgroundColor: string;
};

const LayoutCenter = ({ children, backgroundColor }: LayoutCenterProps) => {
  return (
    <StyledLayoutCenter backgroundColor={backgroundColor}>
      <StyledContent>{children}</StyledContent>
    </StyledLayoutCenter>
  );
};

export default LayoutCenter;
