import styled from 'styled-components';
import Title from '../Title';

const MenuItems = [
  {
    id: 0,
    title: '공지사항',
  },
  {
    id: 1,
    title: 'FAQ',
  },
  {
    id: 1,
    title: '1:1 문의',
  },
  {
    id: 3,
    title: '서비스해지',
  },
];

const StyledMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
`;
const StyledMenuList = styled.ul``;
const StyledItem = styled.li``;

const SearchMenu = () => {
  return (
    <StyledMenuWrap>
      <Title title="" subTitle="고객센터" />
      <StyledMenuList>
        {MenuItems.map((item) => (
          <StyledItem key={item.id}>{item.title}</StyledItem>
        ))}
      </StyledMenuList>
    </StyledMenuWrap>
  );
};

export default SearchMenu;
