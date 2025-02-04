import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/sections/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { Helmet } from 'react-helmet-async';

const Root = () => {
  return (
    <>
      <Helmet defaultTitle="RealEstate" titleTemplate="%s | RealEstate">
        <meta name="description" content="Find your perfect home with RealEstate" />
        <meta name="keywords" content="real estate, homes, properties" />
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