import { Routes, Route } from 'react-router-dom';
//Layout
import { FrontendLayout } from '@src/layout/client/FrontendLayout';
//Pages
import { Home } from '@src/pages/Home';
import { Products } from '@src/pages/Products';
import { SingleProduct } from '@src/pages/SingleProduct';
import { SingleCategory } from '@src/pages/SingleCategory';
import { Category } from '@src/pages/Category';
export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<FrontendLayout />}>
        <Route index element={<Home title='Home' />} />
        <Route path='home' element={<Home title='Home' />} />
        <Route path='products' element={<Products title='Products' />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='products/category/' element={<Category />} />
        <Route
          path='/products/category/:category'
          element={<SingleCategory />}
        />
      </Route>
    </Routes>
  );
};
