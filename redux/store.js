import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./slices/expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesSlice,
  },
});
