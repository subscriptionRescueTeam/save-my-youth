import styled from 'styled-components';
import Title from '../Title';
import { IosArrowRight } from '@styled-icons/fluentui-system-regular';

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
  justify-content: center;
`;
const StyledMenuList = styled.ul``;
const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgray;
`;
const StyledIcon = styled(IosArrowRight)`
  color: lightgray;
  width: 4%;
`;

const SearchMenu = () => {
  return (
    <StyledMenuWrap>
      <StyledMenuList>
        {MenuItems.map((item) => (
          <StyledItem key={item.id}>
            {item.title}
            <StyledIcon />
          </StyledItem>
        ))}
      </StyledMenuList>
    </StyledMenuWrap>
  );
};

export default SearchMenu;
