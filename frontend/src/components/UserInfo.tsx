import React from 'react';
import styled from 'styled-components';
import InputLabel from './InputLabel';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem;
`;

const UserInfo = () => {
  return (
    <StyledContainer>
      <InputLabel label="닉네임" placeholder="퉁이리" />
      <InputLabel label="이메일" placeholder="wer4272@nate.com" />
      <InputLabel label="비밀번호" placeholder="********" />
      <InputLabel label="휴대폰번호" placeholder="010-4342-1234" />
    </StyledContainer>
  );
};

export default UserInfo;
