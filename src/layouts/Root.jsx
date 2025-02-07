import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/sections/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { Helmet } from 'react-helmet-async';

const Root = () => {
  return (
    <>
      <Helmet defaultTitle="Aura Made" titleTemplate="%s | Aura Made">
        <meta name="description" content="Welcome to Aura Made - Luxury consierge service" />
        <meta name="keywords" content="Aura Made, luxury consierge service, luxury, consierge, service" />
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