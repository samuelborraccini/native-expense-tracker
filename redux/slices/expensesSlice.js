import { createSlice } from "@reduxjs/toolkit";
import { EXPENSES } from "../../constants/expenses";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: EXPENSES,
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
});

export default expensesSlice.reducer;

export const { addExpense, removeExpense } = expensesSlice.actions;
