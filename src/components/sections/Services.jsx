import { Home, Building2, Briefcase, Key, LineChart, Users } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Sales',
    description: 'Find your perfect home with our extensive collection of residential properties.',
  },
  {
    icon: Building2,
    title: 'Commercial Properties',
    description: 'Premium office spaces and retail locations for your business needs.',
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Professional management services for property owners and investors.',
  },
  {
    icon: LineChart,
    title: 'Investment Advisory',
    description: 'Expert guidance on real estate investments and market analysis.',
  },
  {
    icon: Briefcase,
    title: 'Legal Consultation',
    description: 'Professional legal advice for all your real estate transactions.',
  },
  {
    icon: Users,
    title: 'Client Support',
    description: '24/7 dedicated support for all your real estate needs.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive real estate services to help you buy, sell, or invest in properties
            with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services; 