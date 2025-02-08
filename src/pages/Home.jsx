import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import About from '../components/sections/About';
import VillaRentals from '../components/sections/VillaRentals';
import IbizaInsider from '../components/sections/IbizaInsider';
import LuxuryExperiences from '../components/sections/LuxuryExperiences';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to Aura Made - Luxury consierge service" />
        <meta name="keywords" content="Aura Made, luxury consierge service, luxury, consierge, service" />
      </Helmet>
      <Hero />
      <Experience />
      <About />
      <VillaRentals />
      <Services id="services" />
      <IbizaInsider />
      <LuxuryExperiences />
      <Contact id="contact" />
    </>
  );
};

export default Home; 