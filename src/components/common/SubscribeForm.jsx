import { useState } from 'react';
import { Mail } from 'lucide-react';
import { subscribeToNewsletter } from '../../utils/emailService';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Subscribing...' });

    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        setEmail('');
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    }

    setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md flex items-center disabled:opacity-50"
            disabled={status.type === 'loading'}
          >
            {status.type === 'loading' ? (
              <span className="animate-spin">⌛</span>
            ) : (
              <Mail className="h-5 w-5" />
            )}
          </button>
        </div>

        {status.message && (
          <p
            className={`text-sm ${
              status.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default SubscribeForm; 