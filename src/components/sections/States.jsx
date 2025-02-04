import { useState } from 'react';
import StateCard from '../states/StateCard';
import StateDetails from '../states/StateDetails';
import { states } from '../../data/states';

const States = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by State</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {states.map((state) => (
            <StateCard
              key={state.id}
              state={state}
              onClick={() => setSelectedState(state)}
            />
          ))}
        </div>

        {selectedState && (
          <StateDetails
            state={selectedState}
            onClose={() => setSelectedState(null)}
          />
        )}
      </div>
    </section>
  );
};

export default States; 