import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/sections/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { Helmet } from 'react-helmet-async';

const Root = () => {
  const location = useLocation();

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet defaultTitle="Caviar Concierge" titleTemplate="%s | Caviar Concierge">
        <meta name="description" content="Welcome to Caviar Concierge - Luxury concierge service" />
        <meta name="keywords" content="Caviar Concierge, luxury concierge service, luxury, concierge, service" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Root; 