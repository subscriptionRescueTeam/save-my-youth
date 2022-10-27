import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '@constants/palette';
const MenuItems = [
  {
    id: 0,
    title: '개인정보',
    link: '/usermodify',
  },
  {
    id: 1,
    title: '좋아요',
    link: '/like',
  },
  {
    id: 2,
    title: '고객센터',
    link: '/help',
  },
];

const SearchMenu = () => {
  return (
    <StyledMenuList>
      {MenuItems.map((item) => (
        <Link key={`${item.id}-${item.link}`} to={item.link}>
          <StyledItem>{item.title}</StyledItem>
        </Link>
      ))}
    </StyledMenuList>
  );
};

export default SearchMenu;

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 10px;
`;

const StyledItem = styled.li`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${PALETTE.LIGHT_010};
`;
