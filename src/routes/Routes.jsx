import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import YachtDetail from '../pages/YachtDetail';
import ServiceDetail from '../pages/ServiceDetail';
import Contact from '../components/sections/Contact';
import CarRental from '../pages/CarRental';
import ServiceContract from '../pages/ServiceContract';
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
        path: '/services/:id',
        element: <ServiceDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/car-rental',
        element: <CarRental />,
      },
      {
        path: '/contract',
        element: <ServiceContract />,
      }
    ],
  },
]); 