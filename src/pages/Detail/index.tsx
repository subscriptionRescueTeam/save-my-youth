import { useState } from 'react';
import styled from 'styled-components';
import Picture from '../../asset/picture.png';
import { ArrowRight } from '../../asset';
import COLOR from '../../constants/color';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 1.5rem;
  border-top: 4px solid ${COLOR.LIGHT_010};
`;

const StyledLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLOR.PRI_DARK_010};
  font-size: 0.9rem;
`;

const StyledTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
`;

const StyledDate = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: ${COLOR.DARK_020};
`;

const StyledImg = styled.img``;

export const StyledMenuTitle = styled.li<{ check?: string }>`
  width: 25%;
  font-size: 0.9rem;
  padding-bottom: 1rem;
  justify-content: center;
  text-align: center;
  font-family: 'Pretendard-Regular';
  display: flex;
  color: lightgray;
  &:hover {
    cursor: pointer;
  }
  &#${({ check }) => check} {
    font-weight: bold;
    color: ${COLOR.PRI_MAIN};
    border-bottom: 2px solid ${COLOR.PRI_MAIN};
  }
`;

const Detail = () => {
  const [menuCheck, setMenuCheck] = useState(0);
  const [check, setCheck] = useState('schedule');
  const menu = [
    { name: '분양일정', option: 'schedule' },
    { name: '공급대상', option: 'target' },
    { name: '임대조건', option: 'lease' },
    { name: '위치', option: 'location' },
  ];
  const menuList = menu.map((i, index) => (
    <StyledMenuTitle
      key={i.option}
      id={i.option}
      check={check}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.name}
    </StyledMenuTitle>
  ));

  const clickFunc = (e: any, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };

  return (
    <>
      <StyledImg src={Picture} width="100%" alt="picture" />
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLocationWrapper>
            서울특별시 <ArrowRight /> 강북구
          </StyledLocationWrapper>
          <StyledTitle>제 1차 장기전세주택 입주자모집공고</StyledTitle>
          <StyledDate>2022.05.15 등록</StyledDate>
        </StyledTitleWrapper>

        <StyledContentWrapper>{menuList}</StyledContentWrapper>
      </StyledWrapper>
    </>
  );
};

export default Detail;
