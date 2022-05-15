import React from 'react';
import LayoutNavigation from '../../components/LayoutNavigation';
import Title from '../../components/Title';
import styled from 'styled-components';

const StyledUserInfoWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  flex-direction: row;
`;

const StyledButton = styled.button`
  margin-left: 20px;
  height: 50px;
`;

const Mypage = () => {
  return (
    <>
      <StyledUserInfoWrap>
        <StyledName>
          <Title title="퉁이리" subTitle="wer4272@nate.com" />
        </StyledName>
        <StyledButton>로그아웃</StyledButton>
      </StyledUserInfoWrap>
    </>
  );
};

export default Mypage;
