import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    applyFilter: filterSlice,
  },
});

export default store;
