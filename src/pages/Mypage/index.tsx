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
  position: absolute;
  width: 81px;
  height: 32px;
  left: 162px;
  top: 368px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 32px;
  letter-spacing: -0.011em;
  text-decoration-line: underline;
  color: #929292;
  background: none;
  border: none;
  cursor: pointer;
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
