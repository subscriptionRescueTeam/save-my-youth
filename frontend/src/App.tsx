import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Search, Mypage, Detail, UserModify, Like, ServiceCenter, Login } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/usermodify" element={<UserModify />} />
        <Route path="/like" element={<Like />} />
        <Route path="/servicecenter" element={<ServiceCenter />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
