import { Award, Users, Home, Target } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Home,
      value: '1000+',
      label: 'Properties Sold',
    },
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
    },
    {
      icon: Award,
      value: '15+',
      label: 'Years Experience',
    },
    {
      icon: Target,
      value: '99%',
      label: 'Client Satisfaction',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '/images/team/member1.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Senior Real Estate Agent',
      image: '/images/team/member2.jpg',
    },
    {
      name: 'Mike Johnson',
      role: 'Property Consultant',
      image: '/images/team/member3.jpg',
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About RealEstate</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to helping our clients find their dream properties and make
            smart real estate investments. With years of experience and deep market
            knowledge, we provide exceptional service and results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional real estate services that exceed our clients'
              expectations. We strive to make the property buying and selling process
              smooth, transparent, and rewarding for everyone involved.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and innovative real estate company, known for our
              integrity, expertise, and commitment to client success in every market we
              serve.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 