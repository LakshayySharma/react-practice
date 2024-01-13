import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import CarList from "./components/CarList";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen relative">
      <div className="text-4xl py-4 p-2 text-center bg-slate-900 text-sky-500 border-4 border-sky-600">
        Cars App
      </div>
      <div className="flex">
        <Form />
        <CarList />
      </div>
    </div>
  );
}

export default App;
