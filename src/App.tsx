import { useStore } from "./store/useStore";
import "./App.css";
import Counter from "./components/Counter";
import { MinusCounter } from "./components/MinusCounter";

function App() {
  const { count } = useStore();
  return (
    <>
      <p>{count}</p>
      <Counter />
      <MinusCounter />
    </>
  );
}

export default App;
