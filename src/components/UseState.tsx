import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>count is :{count}</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
      <button onClick={() => setCount(count - 1)}> minus</button>
    </div>
  );
};

export default UseState;
