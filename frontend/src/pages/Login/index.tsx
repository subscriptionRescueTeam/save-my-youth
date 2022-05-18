import React from 'react';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const clickHandler = async () => {
    console.log('heelo');
    try {
      const res = await axios.get('https://secret-reaches-74853.herokuapp.com/api/user/');
      console.log(res);
    } catch (err) {}
  };

  const responseGoogle = async (response: any) => {
    const res = await fetch('https://secret-reaches-74853.herokuapp.com/api/social-login/google/', {
      method: 'POST',
      body: JSON.stringify({
        id_token: response.tokenId,
        access_token: response.accessToken,
        code: 'code',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    console.log(data);
    console.log(response.tokenId);
    console.log(response.accessToken);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <GoogleLogin
        clientId="853001689831-gr5dqsk1lerr5go8raqkjufbb57o421i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
      <button onClick={clickHandler}>hi</button>
    </div>
  );
};

export default Login;
