import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import VillaRentals from '../components/sections/VillaRentals';
import IbizaInsider from '../components/sections/IbizaInsider';
import Partners from '../components/sections/Partners';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to RealEstate - Find your dream home" />
        <meta name="keywords" content="real estate, home page, properties" />
      </Helmet>
      <Hero />
      <Experience />
      <About />
      <VillaRentals />
      <Services id="services" />
      <IbizaInsider />
      <Partners />
      <Contact id="contact" />
    </>
  );
};

export default Home; 