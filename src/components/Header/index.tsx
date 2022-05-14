import IconMenu from '../IconMenu';
import * as S from './index.styled';

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => (
  <S.header>
    {title}
    <button>로그인</button>
    <button>
      <IconMenu size={20} />
    </button>
  </S.header>
);

export default Header;
