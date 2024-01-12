import { configureStore, createSlice } from "@reduxjs/toolkit";

const testSclice = createSlice({
  name: "test",
  initialState: "",
  reducers: {
    addTest(state, action) {
      return action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    test: testSclice.reducer,
  },
});

export { store };
export const { addTest } = testSclice.actions;
