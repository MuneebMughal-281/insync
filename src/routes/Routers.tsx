import { Routes, Route } from 'react-router-dom';
//Layout
import { FrontendLayout } from '@src/layout/client/FrontendLayout';
//Pages
import { Home } from '@src/pages/Home';
import { About } from '@src/pages/About';
import { Login } from '@src/pages/Login';
import { Password } from '@src/pages/Password';
import { Register } from '@src/pages/Register';
import { SingleProduct } from '@src/pages/SingleProduct';
export const Routers = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<FrontendLayout />}>
        <Route index element={<Home title='Home' />} />
        <Route path='home' element={<Home title='Home' />} />
        <Route path='products' element={<Home title='Products' />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<Register />} />
        <Route path='password' element={<Password />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
      </Route>
    </Routes>
  );
};
