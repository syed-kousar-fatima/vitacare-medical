import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const timerRef = useRef(null);

  useEffect(() => {
    if (isInView && end > 0) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const updateCount = () => {
        const now = Date.now();
        const remaining = Math.max(endTime - now, 0);
        const progress = 1 - remaining / (duration * 1000);
        
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          timerRef.current = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      timerRef.current = requestAnimationFrame(updateCount);
    }

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-poppins font-bold tabular-nums">
      {count}{suffix}
    </span>
  );
};

export default Counter;
