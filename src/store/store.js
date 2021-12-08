import { createStore } from "redux";

const intialState = { counter: 0, show: true };

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

const store = createStore(counterReducer);

export default store;
