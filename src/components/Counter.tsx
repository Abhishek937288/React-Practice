import { useStore } from "../store/useStore";

const Counter = () => {
  const { inc } = useStore();
  return (
    <div>
      <button onClick={inc}>one up</button>
    </div>
  );
};

export default Counter;
