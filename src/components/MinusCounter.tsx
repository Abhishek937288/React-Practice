import { useStore } from "../store/useStore";

export const MinusCounter = () => {
  const { dec } = useStore();
  return (
    <div>
      <button onClick={dec}>Minus</button>
    </div>
  );
};
