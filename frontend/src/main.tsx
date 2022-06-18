import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
