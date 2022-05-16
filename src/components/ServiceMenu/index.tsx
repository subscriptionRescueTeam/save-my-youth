import styled from 'styled-components';
import Title from '../Title';
import COLOR from '../../constants/color';
import { ArrowRight } from '../../asset';

const MenuItems = [
  {
    id: 0,
    title: '개인정보 수정',
  },
  {
    id: 1,
    title: '좋아요',
  },
  {
    id: 2,
    title: '알림 설정',
  },
  {
    id: 3,
    title: '고객센터',
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
`;

const StyledItem = styled.li`
  display: flex;
  margin-bottom: 1.3rem;
  height: 3rem;
  padding: 1rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid ${COLOR.LIGHT_010};
`;

const StyledLine = styled.span`
  position: absolute;
  height: 8px;
  left: 0px;
  top: 36px;
  background: ${COLOR.LIGHT_010};
`;

const StyledButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 81px;
  height: 32px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.3rem;
  letter-spacing: -0.011em;
  text-decoration-line: underline;
  color: ${COLOR.DARK_020};
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchMenu = () => {
  return (
    <StyledMenuWrap>
      <StyledMenuList>
        {MenuItems.map((item) => (
          <StyledItem key={item.id}>
            {item.title}
            <ArrowRight />
          </StyledItem>
        ))}
      </StyledMenuList>
      <StyledButtonWrap>
        <StyledButton>로그아웃</StyledButton>
      </StyledButtonWrap>
    </StyledMenuWrap>
  );
};

export default SearchMenu;
