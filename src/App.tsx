import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Posts } from "./components/Posts";
import ProtectedLayout from "./Layouts/ProtectedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
