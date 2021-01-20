import { useState, useEffect } from 'react';

const useScrollPercentage = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const s = window.pageYOffset;
      const d = document.body.scrollHeight;
      const c = window.innerHeight;
      const scrollPercent = (s / (d - c)) * 100;
      setValue(scrollPercent);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return value;
};

export default useScrollPercentage;
