import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/mainLayout';
import Home from '../pages/home';
import Favorites from '../pages/Favorites/favorites';
import Login from '../pages/login/login';
import ErrorPage from '../components/error';
import PhoneDetails from '../components/phoneDetails';

const createdRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/phones.json'),
      },
      { path: '/favorites', element: <Favorites /> },
      { path: '/login', element: <Login /> },
      {
        path: '/phones/:id',
        element: <PhoneDetails />,
        loader: () => fetch('/phones.json'),
      },
    ],
  },
]);

export default createdRouter;
