import { Routes, Route } from 'react-router-dom';
//Layout
import { FrontendLayout } from '@src/layout/client/FrontendLayout';
//Pages
import { Home } from '@src/pages/Home';
import { About } from '@src/pages/About';
import { Login } from '@src/pages/Login';
import { Password } from '@src/pages/Password';
import { Register } from '@src/pages/Register';
export const Routers = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<FrontendLayout />}>
        <Route index element={<Home title='Title' />} />
        <Route path='home' element={<Home title='title' />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='register' element={<Register />} />
      <Route path='password' element={<Password />} />
    </Routes>
  );
};
