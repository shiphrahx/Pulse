import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for animating numbers from 0 to target value
 * @param {number} end - The target number to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {boolean} start - Whether to start the animation
 * @returns {number} Current counter value
 */
export const useCounter = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    // Reset counter when starting
    countRef.current = 0;
    setCount(0);
    startTimeRef.current = null;

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOut * end);

      countRef.current = currentCount;
      setCount(currentCount);

      if (percentage < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end at exactly the target value
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
};
