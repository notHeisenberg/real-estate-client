import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const demoProperties = [
  {
    id: 1,
    title: 'Modern Villa',
    location: 'Beverly Hills',
    price: '$2,500,000',
    image: '/images/properties/property1.jpg',
    beds: 5,
    baths: 4,
    sqft: 4200,
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    location: 'Downtown',
    price: '$850,000',
    image: '/images/properties/property2.jpg',
    beds: 3,
    baths: 2,
    sqft: 1800,
  },
  {
    id: 3,
    title: 'Family Home',
    location: 'Suburbs',
    price: '$450,000',
    image: '/images/properties/property3.jpg',
    beds: 4,
    baths: 3,
    sqft: 2500,
  },
  // Add more demo properties here
];

const Properties = () => {
  return (
    <>
    <Helmet>
      <title>Properties</title>
      <meta name="description" content="Browse our available properties" />
      <meta name="keywords" content="properties, real estate listings, homes for sale" />
    </Helmet>
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Available Properties</h1>

        
        {/* Filters - Demo Only */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search location..."
              className="p-2 border rounded"
            />
            <select className="p-2 border rounded">
              <option>Price Range</option>
              <option>$200k - $500k</option>
              <option>$500k - $1M</option>
              <option>$1M+</option>
            </select>
            <select className="p-2 border rounded">
              <option>Property Type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{property.beds} beds</span>
                  <span>{property.baths} baths</span>
                  <span>{property.sqft} sqft</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{property.price}</span>
                  <Link
                    to={`/properties/${property.id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};


export default Properties; 