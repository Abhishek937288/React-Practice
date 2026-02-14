import  { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(5);
  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => {
    const computeFactorial = (n : number) => {
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h2>
        Factorial of {number} is {factorial}
      </h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
      <p>Counter: {counter}</p>
    </div>
  );
}

export default FactorialCalculator;
