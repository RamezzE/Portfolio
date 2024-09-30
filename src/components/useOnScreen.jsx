import { useState, useEffect, useRef } from 'react';

// Hook for using intersection observer that triggers only once
const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false); // Track if it has been intersected once

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIntersecting(true);
        setHasIntersected(true); // Mark as intersected
        observer.unobserve(ref.current); // Stop observing once it has been intersected
      }
    }, options);

    if (ref.current && !hasIntersected) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, hasIntersected]);

  return [ref, isIntersecting];
};

export default useOnScreen;
