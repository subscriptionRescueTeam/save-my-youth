import styled from 'styled-components';
import Header from '../Header';

export const StyledLayoutNavigation = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export type LayoutNavigationProps = {
  children: React.ReactNode;
};

const LayoutNavigation = ({ children }: LayoutNavigationProps) => {
  return (
    <StyledLayoutNavigation>
      <Header title="청년을 구해줘" />
      <StyledContent>{children}</StyledContent>
    </StyledLayoutNavigation>
  );
};

export default LayoutNavigation;
