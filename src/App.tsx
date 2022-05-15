import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components';
import { Search } from './pages/Search/index';
import reset from 'styled-reset';
import Mypage from './pages/Mypage/index';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
