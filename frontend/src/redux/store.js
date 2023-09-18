import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./heroes/heroesSlice";

const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});

export default store;
