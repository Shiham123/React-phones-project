import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const MainLayout = () => {
  return (
    <div className="max-w-[1620px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
