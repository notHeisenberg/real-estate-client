import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import useScrollSection from '../../hooks/useScrollSection';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useScrollSection();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-transparent p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-black" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 