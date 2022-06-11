import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import InputLabel from './InputLabel';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem;
`;

const UserInfo = () => {
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);
  const userName = cookies['UserInfo']['last_name'] + cookies['UserInfo']['first_name'];

  return (
    <StyledContainer>
      <InputLabel label="이름" placeholder={`${userName}`} />
      <InputLabel label="아이디" placeholder={`${cookies.UserInfo.username}`} />
      <InputLabel label="이메일" placeholder={`${cookies.UserInfo.email}`} />
    </StyledContainer>
  );
};

export default UserInfo;
