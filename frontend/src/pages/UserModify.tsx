import styled from 'styled-components';
import CommonHeader from '../components/CommonHeader';
import UserInfo from '../components/UserInfo';

const StyledUserInfoWrap = styled.div``;

const UserModify = () => {
  return (
    <StyledUserInfoWrap>
      <CommonHeader title="개인정보 수정" />
      <UserInfo />
    </StyledUserInfoWrap>
  );
};

export default UserModify;
