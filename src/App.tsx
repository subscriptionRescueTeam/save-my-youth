import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Medium', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  } 
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />{' '}
      </Routes>
    </BrowserRouter>
  );
};

export default App;