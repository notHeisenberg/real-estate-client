import { useEffect } from 'react';

const useScrollSection = () => {
  useEffect(() => {
    const handleScrollToSection = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href')?.slice(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener('click', handleScrollToSection);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScrollToSection);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { scrollToTop };
};

export default useScrollSection; 