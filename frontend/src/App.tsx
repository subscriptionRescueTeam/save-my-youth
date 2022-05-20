import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Mypage from './pages/Mypage';
import Detail from './pages/Detail';
import UserModify from './pages/UserModify';
import Like from './pages/Like';
import ServiceCenter from './pages/ServiceCenter';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

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
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
