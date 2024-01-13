import { configureStore } from "@reduxjs/toolkit";
import {
  CarsReducer,
  addCar,
  removeCar,
  changeSerachTerm,
} from "./Slice/CarsSlice";
import { FormReducer, changeCost, changeName } from "./Slice/FormSlice";

const store = configureStore({
  reducer: {
    cars: CarsReducer,
    form: FormReducer,
  },
});

export { store };
export { addCar, removeCar, changeCost, changeName, changeSerachTerm };
