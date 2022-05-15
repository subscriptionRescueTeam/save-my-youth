import React from 'react';
import LayoutNavigation from '../../components/LayoutNavigation';
import Title from '../../components/Title';
import styled from 'styled-components';
import ServiceMenu from '../../components/ServiceMenu';

const StyledUserInfoWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  height: 30px;
  border: none;
  background: none;
  color: gray;
  font-weight: 900px;
  border-bottom: 1px solid gray;
`;

const Mypage = () => {
  return (
    <>
      <StyledUserInfoWrap>
        <ServiceMenu />
        <StyledButton>로그아웃</StyledButton>
      </StyledUserInfoWrap>
    </>
  );
};

export default Mypage;
