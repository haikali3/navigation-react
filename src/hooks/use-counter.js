import { useState, useEffect } from 'react';

function useCounter(initialCounter) {
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
