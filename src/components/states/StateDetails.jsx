import { X } from 'lucide-react';
import PropTypes from 'prop-types';

const StateDetails = ({ state, onClose }) => {
  if (!state) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img
              src={state.image}
              alt={state.name}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold mb-4">{state.name}</h2>
          <p className="text-gray-600 mb-6">{state.description}</p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Properties Available: {state.propertyCount}</li>
                <li>Average Price: {state.averagePrice}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Popular Cities</h3>
              <ul className="space-y-2 text-gray-600">
                {state.popularCities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Featured Property Types</h3>
            <div className="grid grid-cols-2 gap-4">
              {state.features.map((feature) => (
                <div
                  key={feature}
                  className="bg-gray-50 p-3 rounded-lg text-gray-700"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StateDetails.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    propertyCount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    averagePrice: PropTypes.string.isRequired,
    popularCities: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default StateDetails; 