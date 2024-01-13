import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
const Form = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleName = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCost = (e) => {
    dispatch(changeCost(e.target.value));
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
    dispatch(changeName(""));
    dispatch(changeCost(0));
  };
  return (
    <div className="w-1/3 m-8">
      <form className=" bg-slate-700 p-4 flex flex-col rounded-md">
        <label className="text-sky-200 p-2 m-2 text-center">
          Add a new car
        </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleName}
          className="p-2 m-2 rounded-md bg-slate-900 placeholder:text-slate-400 text-slate-400"
          placeholder="Enter name"
          value={name}
        />
        <input
          type="number"
          name="cost"
          id="cost"
          onChange={handleCost}
          value={cost ? cost : ""}
          placeholder="Enter cost"
          className="p-2 m-2 rounded-md bg-slate-900 placeholder:text-slate-400 text-slate-400"
        />
        <input
          type="submit"
          value="Click to add"
          className="p-2 m-2 bg-sky-600 rounded-md text-sky-100 px-4 cursor-pointer self-center"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default Form;
