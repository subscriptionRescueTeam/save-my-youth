import styled from 'styled-components';
import Title from '../Title';
import ArrowRight from '../../assets/ArrowRight.svg';
import COLOR from '../../constants/color';

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

const StyledMenuWrap = styled.div``;

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 375px;
  height: 230px;
  left: 0px;
  top: 113px;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 375px;
  height: 56px;
  border-bottom: 2px solid ${COLOR.LIGHT_010};
  justify-content: space-between;
`;

const StyledLine = styled.span`
  position: absolute;
  width: 375px;
  height: 8px;
  left: 0px;
  top: 336px;
  background: ${COLOR.LIGHT_010};
`;

const SearchMenu = () => {
  return (
    <StyledMenuWrap>
      <StyledMenuList>
        {MenuItems.map((item) => (
          <StyledItem key={item.id}>
            {item.title}
            <img src={ArrowRight} />
          </StyledItem>
        ))}
      </StyledMenuList>
      <StyledLine />
    </StyledMenuWrap>
  );
};

export default SearchMenu;
