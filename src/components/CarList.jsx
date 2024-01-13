import { useDispatch, useSelector } from "react-redux";
import { changeSerachTerm, removeCar } from "../store";
const CarList = () => {
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    console.log(data);
    return data.filter((car) => {
      console.log(car);
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(changeSerachTerm(e.target.value));
  };
  return (
    <div className="w-2/3 m-8 bg-slate-700 rounded-md">
      <div className="flex justify-between">
        <div className="text-sky-200 p-4 text-center">CarList</div>
        <div className="p-2">
          <label className="mx-4 text-sky-100">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            className="m-2 rounded-md bg-slate-900 placeholder:text-slate-400 text-slate-400 p-2"
            placeholder="search for cars"
            onChange={handleSearch}
          />
        </div>
      </div>
      {cars.length > 0 &&
        cars.map((car) => (
          <div key={car.id} className="bg-slate-900 p-2 m-4 text-sky-50">
            <div className="flex justify-between">
              <div className="self-center text-center">
                {car.name} - {car.cost}
              </div>
              <div>
                <button
                  className="bg-red-600 p-2 px-4 text-sm rounded-md"
                  onClick={() => dispatch(removeCar(car.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CarList;
