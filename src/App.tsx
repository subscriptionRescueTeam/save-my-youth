import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Search, Mypage, Detail } from './pages';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import UserModify from './pages/UserModify';
import Like from './pages/Like';
import AlarmSetting from './pages/AlarmSetting';
import ServiceCenter from './pages/ServiceCenter';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    outline: none;
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard-Medium', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
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
        <Route path="/detail" element={<Detail />} />
        <Route path="/usermodify" element={<UserModify />} />
        <Route path="/like" element={<Like />} />
        <Route path="/alarmsetting" element={<AlarmSetting />} />
        <Route path="/servicecenter" element={<ServiceCenter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
