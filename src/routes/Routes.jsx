import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import YachtDetail from '../pages/YachtDetail';
import Contact from '../components/sections/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/yachts/:id',
        element: <YachtDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ],
  },
]); 