import { useContext } from "react";
import { UserContext } from "./context/userContext";

const TodoList = () => {
  const context = useContext(UserContext);
  if (!context) {
    return <p> User is not provided</p>;
  }
  const { userData, setUserData } = context;
  return (
    <div>
      TodoList
      <p>{userData?.name}</p>
      <button onClick={() => setUserData({ name: "ram" })}>change name</button>
    </div>
  );
};

export default TodoList;
