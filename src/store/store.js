import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authenticationSlice from "./authentication-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    authentication: authenticationSlice,
  },
});

export default store;
