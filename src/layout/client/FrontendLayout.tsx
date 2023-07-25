import { Outlet } from 'react-router-dom';
import { Navbar } from '@src/layout/client/Navbar';
export const FrontendLayout = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className='client_content'>
        <Outlet />
      </div>
    </div>
  );
};
