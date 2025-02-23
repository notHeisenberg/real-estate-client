import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import YachtDetail from '../pages/YachtDetail';
import VillaDetail from '../pages/VillaDetail';
import ServiceDetail from '../pages/ServiceDetail';
import Contact from '../components/sections/Contact';
import CarRental from '../pages/CarRental';
import ServiceContract from '../pages/ServiceContract';
import YachtsPage from '../pages/YachtsPage';
import VillasPage from '../pages/VillasPage';

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
        path: '/yachts',
        element: <YachtsPage />,
      },
      {
        path: '/yachts/:id',
        element: <YachtDetail />,
      },
      {
        path: '/villas',
        element: <VillasPage />,
      },
      {
        path: '/villas/:id',
        element: <VillaDetail />,
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