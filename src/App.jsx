import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTest } from "./store";

function App() {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);
  const handleClick = () => {
    dispatch(addTest("abc"));
  };
  return (
    <>
      <p>{test}</p>
      <button onClick={handleClick}>Test</button>
    </>
  );
}

export default App;
