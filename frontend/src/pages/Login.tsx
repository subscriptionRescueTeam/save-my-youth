import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';
import axios from 'axios';

const Login = () => {
  const loginSuccess = async (response: any) => {
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
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const loginFail = () => {
    window.alert('로그인 실패했습니다. 관리자에게 문의해주세요.');
  };

  const test = async () => {
    const response = await axiosInstance.get('api/user/');
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          <GoogleLogin
            clientId="853001689831-gr5dqsk1lerr5go8raqkjufbb57o421i.apps.googleusercontent.com"
            buttonText="Log in with Google"
            onSuccess={loginSuccess}
            onFailure={loginFail}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
          <button onClick={test}>test</button>
        </div>
      </header>
    </div>
  );
};

export default Login;
