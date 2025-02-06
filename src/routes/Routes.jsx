import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import Services from '../pages/Services';

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]); 