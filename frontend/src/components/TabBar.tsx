/*
사용법

예시)
  const menu = [
    { name: '분양일정', option: 'schedule' },
    { name: '공급대상', option: 'target' },
    { name: '임대조건', option: 'lease' },
    { name: '위치', option: 'location' },
  ];
  const checkList = {
    0: <>분양일정 데이터 연동중이에요!</>,
    1: <>공급대상 데이터 연동중이에요!</>,
    2: <>임대조건 데이터 연동중이에요!</>,
    3: <SaleSchedule />,
  };

  페이지에서 사용할 땐
  <TabBar menu={menu} checkList={checkList} /> 다음과 같이 불러와주세요.

*/
import { useState } from 'react';
import styled from 'styled-components';

import PALETTE from '../constants/palette';
import { HelpContents, IDetailOptions } from '../types';

export type TabBarProps = {
  menu: IDetailOptions[];
  checkList: HelpContents;
};

const TabBar = ({ menu, checkList }: TabBarProps) => {
  const [menuCheck, setMenuCheck] = useState<number>(0);
  const [check, setCheck] = useState<string>(menu[0].option);

  const menuList = menu.map((i: IDetailOptions, index: number) => (
    <StyledMenuTitle
      key={i.option}
      id={i.option}
      check={check}
      count={menu.length}
      onClick={(e) => clickFunc(e, index)}
    >
      {i.name}
    </StyledMenuTitle>
  ));

  const clickFunc = (e: React.BaseSyntheticEvent<MouseEvent>, index: number) => {
    setMenuCheck(index);
    setCheck(e.target.id);
  };
  return (
    <>
      <StyledContentWrapper>{menuList}</StyledContentWrapper>
      {checkList[menuCheck]}
    </>
  );
};

export default TabBar;

const StyledContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 1.5rem;
  border-top: 4px solid ${PALETTE.LIGHT_010};
`;

const StyledMenuTitle = styled.li<{ check?: string; count: number }>`
  width: ${({ count }) => 100 / count}%;
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
    color: ${PALETTE.PRI_MAIN};
    border-bottom: 2px solid ${PALETTE.PRI_MAIN};
  }
`;
