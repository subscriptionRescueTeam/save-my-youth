import { CSSProperties } from 'react';
import { useCookies } from 'react-cookie';
import GoogleLogin from 'react-google-login';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as GoogleLogo } from '../assets/icons/google.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import LayoutCenter from '../components/LayoutCenter';
import PALETTE from '../constants/palette';
// import KakaoLogin from 'react-kakao-login';

const StyledTitleContainer = styled.div`
  display: flex;
  margin-top: 10.81vh;
`;

const StyledTitle = styled.h1`
  font-size: 2.04rem;
  color: ${PALETTE.PRI_MAIN};
  font-weight: 600;
  margin: 3px 0 0 6.35px;
`;

const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 14.57vh;
`;

const StyledGreeting = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 14px 0 14px 0;
`;

const StyledGreetingComment = styled.span`
  font-size: 1rem;
  margin-bottom: 13px;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledGoogle = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
  color: ${PALETTE.DARK_040};
  margin: 2px 0 0 8px;
`;

const StyledToHome = styled.span`
  font-size: 1rem;
  color: ${PALETTE.DARK_020};
  border-bottom: 1px solid ${PALETTE.DARK_020};
`;

const StyledMaker = styled.span`
  font-size: 0.875rem;
  margin-top: 15rem;
  color: ${PALETTE.DARK_010};
`;

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['AccessToken', 'RefreshToken', 'UserInfo']);

  const googleLoginSuccess = async (response: any) => {
    const res = await fetch('https://secret-reaches-74853.herokuapp.com/api/social-login/google/', {
      method: 'POST',
      body: JSON.stringify({
        access_token: response.accessToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setCookie('AccessToken', data.access_token);
    setCookie('RefreshToken', data.refresh_token);
    setCookie('UserInfo', data.user);
    navigate('/');
  };

  // const kakaoLoginSuccess = async (response: any) => {
  //   const res = await fetch('https://secret-reaches-74853.herokuapp.com/api/social-login/kakao/', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       access_token: response.response.access_token,
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const data = await res.json();
  //   setCookie('AccessToken', data.access_token);
  //   setCookie('RefreshToken', data.refresh_token);
  //   setCookie('UserInfo', data.user);
  //   navigate('/');
  // };

  const loginFail = () => {
    window.alert('로그인 실패했습니다. 관리자에게 문의해주세요.');
  };

  const GoogleLoginButtonCss: CSSProperties = {
    width: '100%',
    height: '56px', // "72px"
    borderRadius: '20px',
    backgroundColor: PALETTE.WHITE,
    boxShadow: '0px 4px 17px rgba(119, 119, 119, 0.2)',
    marginTop: '6.48vh',
    marginBottom: '4.32vh',
  };

  // const KakaoLoginButtonCss: CSSProperties = {
  //   width: '100%',
  //   height: '56px', // "72px"
  //   borderRadius: '20px',
  //   backgroundColor: PALETTE.KAKAO,
  //   boxShadow: '0px 4px 17px rgba(119, 119, 119, 0.2)',
  //   marginTop: '6.48vh',
  //   marginBottom: '4.32vh',
  // };

  return (
    <LayoutCenter>
      <StyledTitleContainer>
        <Logo />
        <StyledTitle>청년을 구해줘!</StyledTitle>
      </StyledTitleContainer>
      <StyledComment>
        <StyledGreeting>반가워요!</StyledGreeting>
        <StyledGreetingComment>오늘도 청약을 알아보러 가볼까요?</StyledGreetingComment>
      </StyledComment>
      <GoogleLogin
        clientId="853001689831-gr5dqsk1lerr5go8raqkjufbb57o421i.apps.googleusercontent.com"
        onSuccess={googleLoginSuccess}
        onFailure={loginFail}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <StyledButton onClick={renderProps.onClick} style={GoogleLoginButtonCss}>
            <GoogleLogo />
            <StyledGoogle>Google로 로그인</StyledGoogle>
          </StyledButton>
        )}
      />
      {/* <KakaoLogin
        token="65ba956836fbee5b0555a947e7cdfdc7"
        onSuccess={kakaoLoginSuccess}
        onFail={loginFail}
        needProfile
        useLoginForm
        persistAccessToken
        throughTalk
        render={(renderProps) => (
          <StyledButton onClick={renderProps.onClick} style={KakaoLoginButtonCss}>
            <StyledGoogle>Kakao로 로그인</StyledGoogle>
          </StyledButton>
        )}
      /> */}
      <Link to="/">
        <StyledToHome>홈으로 돌아가기</StyledToHome>
      </Link>
      <StyledMaker>@청년을 구해줘</StyledMaker>
    </LayoutCenter>
  );
};

export default Login;
