import styled from 'styled-components';
import PALETTE from '../../constants/palette';
import { ReactComponent as ArrowRight } from '../../assets/icons/arrowRight.svg';
import { Link } from 'react-router-dom';

const MenuItems = [
  {
    id: 0,
    title: '개인정보 수정',
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

const StyledMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

const StyledItem = styled.li`
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${PALETTE.LIGHT_010};
`;

const StyledLine = styled.span`
  position: absolute;
  height: 8px;
  left: 0px;
  top: 36px;
  background: ${PALETTE.LIGHT_010};
`;

const StyledButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  margin-top: 1.5rem;
  text-decoration: underline;
  color: ${PALETTE.DARK_020};
  border: none;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
`;

const SearchMenu = () => {
  return (
    <StyledMenuWrap>
      <StyledMenuList>
        {MenuItems.map((item) => (
          <Link key={`${item.id}-${item.link}`} to={item.link}>
            <StyledItem>
              {item.title}
              <ArrowRight />
            </StyledItem>
          </Link>
        ))}
      </StyledMenuList>
      <StyledButtonWrap>
        <StyledButton>로그아웃</StyledButton>
      </StyledButtonWrap>
    </StyledMenuWrap>
  );
};

export default SearchMenu;
