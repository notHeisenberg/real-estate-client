import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

const StateCard = ({ state, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={state.image}
          alt={state.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{state.name}</h3>
        <p className="text-gray-600 mb-2">{state.propertyCount} Properties</p>
        <p className="text-gray-600 mb-4">{state.description}</p>
        <div className="flex items-center text-blue-600 hover:text-blue-800">
          View Properties
          <ArrowRight className="h-4 w-4 ml-2" />
        </div>
      </div>
    </div>
  );
};

StateCard.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    propertyCount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StateCard; 