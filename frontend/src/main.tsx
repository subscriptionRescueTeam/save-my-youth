import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </RecoilRoot>
  </React.StrictMode>
);
