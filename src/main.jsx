import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './main.css';
import createdRouter from './Route/route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={createdRouter} />
);
