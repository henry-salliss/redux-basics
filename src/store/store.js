import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
const intialState = { counter: 0, show: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const counterReducer = (state = intialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      show: state.show,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      show: state.show,
    };
  }

  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
      show: state.show,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      show: !state.show,
    };
  }

  return state;
};

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
