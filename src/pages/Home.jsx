import Hero from '../components/sections/Hero';
import States from '../components/sections/States';
import Services from '../components/sections/Services';
import Contact from '../components/sections/Contact';
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
      <States />
      <Services id="services" />
      <Contact />
    </>
  );
};

export default Home; 