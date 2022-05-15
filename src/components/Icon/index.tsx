import * as S from './index.styled';

type IconProps = {
  children: React.ReactNode;
  size?: number;
  color?: string;
};

export const Icon = ({ children, size, color = '' }: IconProps) => {
  return (
    <S.Icon color={color} size={size} role="img">
      {children}
    </S.Icon>
  );
};
