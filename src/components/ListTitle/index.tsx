import * as S from './index.styled';

export type ListTitleProps = {
  title: string;
  more?: string;
  underline?: boolean;
};

const ListTitle = ({ title, more = '더보기', underline = false }: ListTitleProps) => {
  return (
    <S.ListTitle underline={underline}>
      <S.Title>{title}</S.Title>
      <S.More>{more}</S.More>
    </S.ListTitle>
  );
};

export default ListTitle;
