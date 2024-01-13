import { createSlice, nanoid } from "@reduxjs/toolkit";

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      action.payload.id = nanoid(3);
      state.data.push(action.payload);
    },
    removeCar(state, action) {
      console.log(state.cars);
      state.data = state.data.filter((item) => {
        return item.id !== action.payload;
      });
    },
    changeSerachTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const CarsReducer = CarsSlice.reducer;
export const { addCar, removeCar, changeSerachTerm } = CarsSlice.actions;
