import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] bg-gray-900 text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
          Find Your Perfect Home in Your Dream Location
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          Discover exceptional properties across the country with our extensive real estate listings
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="#properties"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            View Properties
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="#contact"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 