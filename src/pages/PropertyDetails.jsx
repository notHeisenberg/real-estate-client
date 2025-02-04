import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bed, Bath, Home, MapPin } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();

  // Demo data - In a real app, this would come from an API
  const property = {
    id,
    title: 'Luxury Modern Villa',
    location: 'Beverly Hills, CA',
    price: '$2,500,000',
    description: 'This stunning modern villa offers luxurious living spaces with high-end finishes throughout. Features include a gourmet kitchen, spacious primary suite, and resort-style backyard.',
    image: '/images/properties/property1.jpg',
    beds: 5,
    baths: 4,
    sqft: 4200,
    features: [
      'Gourmet Kitchen',
      'Swimming Pool',
      'Home Theater',
      'Wine Cellar',
      'Smart Home System',
      '3-Car Garage',
    ],
    images: [
      '/images/properties/property1.jpg',
      '/images/properties/property2.jpg',
      '/images/properties/property3.jpg',
    ],
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/properties"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Properties
        </Link>

        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            {property.location}
          </div>
          <div className="text-3xl font-bold text-blue-600">{property.price}</div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Property Details</h2>
            <p className="text-gray-600 mb-6">{property.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-blue-600" />
                <span>{property.beds} Bedrooms</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-blue-600" />
                <span>{property.baths} Bathrooms</span>
              </div>
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2 text-blue-600" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Contact Agent</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder="I'm interested in this property..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails; 