import { Home, Clock, Users, Shield, ChefHat, Car, Waves, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const premiumServices = [
    {
      icon: Home,
      title: 'Luxury Properties',
      description: 'Exclusive access to the most prestigious properties in prime locations. From beachfront villas to urban penthouses.',
      features: [
        'Private Viewings',
        'Virtual 3D Tours',
        'Personalized Property Search',
        'Investment Opportunities'
      ]
    },
    {
      icon: ChefHat,
      title: 'Lifestyle Services',
      description: 'Experience luxury living with our premium lifestyle services tailored to your preferences.',
      features: [
        'Private Chefs',
        'Personal Butlers',
        'Housekeeping Services',
        'Event Planning'
      ]
    },
    {
      icon: Car,
      title: 'Premium Transportation',
      description: 'Luxury transportation services for all your travel needs, from airport transfers to special occasions.',
      features: [
        'Luxury Car Fleet',
        'Private Chauffeurs',
        'Airport VIP Services',
        'Yacht Charters'
      ]
    },
    {
      icon: Heart,
      title: 'Concierge Care',
      description: '24/7 dedicated concierge service ensuring your every need is met with the utmost attention to detail.',
      features: [
        'Personal Assistant',
        'Restaurant Reservations',
        'Event Access',
        'Travel Planning'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Waves,
      title: 'Luxury Experiences',
      description: 'Curated experiences from yacht charters to exclusive events.'
    },
    {
      icon: Shield,
      title: 'VIP Security',
      description: 'Professional security services for complete peace of mind.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock support for all your luxury lifestyle needs.'
    },
    {
      icon: Users,
      title: 'Personal Staff',
      description: 'Highly trained personnel including butlers, chefs, and assistants.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/services/luxury-service.jpg')",
            opacity: 0.7
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services Designed Around You</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Experience unparalleled luxury with our comprehensive suite of premium services.
            Available 24/7 to exceed your expectations.
          </p>
        </div>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Services */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide personalized assistance and tailored solutions to meet your most discerning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {premiumServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-10 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mr-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 py-16 px-4 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-16">Exclusive Benefits</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 bg-gradient-to-r from-blue-600 to-blue-800 p-16 rounded-xl text-white">
            <h2 className="text-3xl font-bold mb-6">Experience Luxury Living</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us elevate your lifestyle with our premium services and dedicated support.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Our Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services; 