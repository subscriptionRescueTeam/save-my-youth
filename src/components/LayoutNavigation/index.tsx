import Header from '../Header';
import * as S from './index.styled';

export type LayoutNavigationProps = {
  children: React.ReactNode;
};

const LayoutNavigation = ({ children }: LayoutNavigationProps) => (
  <S.LayoutNavigation>
    <Header title="청년을 구해줘" />
    <S.Content>{children}</S.Content>
  </S.LayoutNavigation>
);

export default LayoutNavigation;
