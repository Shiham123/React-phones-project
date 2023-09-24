import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import Home from '../pages/home';
import Favorites from '../pages/Favorites/favorites';
import Login from '../pages/login/login';

const createdRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default createdRouter;
