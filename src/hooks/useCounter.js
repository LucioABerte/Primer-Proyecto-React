import { useState } from "react";

const useCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  const decremento5 = () => setCount(count - 5);
  const aumento5 = () => setCount(count + 5);
  const reseteo = () => setCount(0);
  return {
    count,
    decrement,
    increment,
    decremento5,
    aumento5,
    reseteo
  };
};

export default useCounter;
