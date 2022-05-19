import styled from 'styled-components';
import Picture from '../../asset/picture2.png';
import { ArrowRight } from '../../asset';
import COLOR from '../../constants/color';
import { SaleSchedule, TabBar } from '../../components';
import CommonHeader from '../../components/CommonHeader';
import { useNavigate } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
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

const StyledTag = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: ${COLOR.DARK_030};
  background-color: ${COLOR.PRI_LIGHT_010};
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const StyledImg = styled.img``;

const Flex = styled.div`
  display: flex;
`;

const Detail = () => {
  const menu = [
    { name: '청약일정', option: 'schedule' },
    { name: '위치', option: 'location' },
  ];
  const checkList: any = {
    0: <>청약일정 데이터 연동중이에요!</>,
    1: <SaleSchedule />,
  };

  let navigate = useNavigate();
  return (
    <>
      <CommonHeader title="청약 상세" />
      <StyledImg src={Picture} width="100%" alt="picture" />
      <StyledWrapper>
        <StyledTitleWrapper>
          <StyledLocationWrapper onClick={() => navigate('/search')}>
            서울특별시 <ArrowRight /> 강북구
          </StyledLocationWrapper>
          <StyledTitle>제 1차 장기전세주택 입주자모집공고</StyledTitle>
          <Flex>
            <StyledTag>345세대</StyledTag>
          </Flex>
          <StyledDate>2022.05.15 등록</StyledDate>
        </StyledTitleWrapper>

        <TabBar menu={menu} checkList={checkList} />
      </StyledWrapper>
    </>
  );
};

export default Detail;
