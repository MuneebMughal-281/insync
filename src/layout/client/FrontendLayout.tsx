import { Outlet } from 'react-router-dom';
export const FrontendLayout = () => {
  return (
    <div className='app'>
      <div className='client_content'>
        <Outlet />
      </div>
    </div>
  );
};
