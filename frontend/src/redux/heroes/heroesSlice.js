import { createSlice } from "@reduxjs/toolkit";
import {
  getHeroes,
  getHeroById,
  removeHeroById,
  updateHero,
  createHero,
} from "./operations";

const handlePending = (state) => {
  state.products = [];
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  item: [],
  totalHeroes: null,
  isLoading: false,
  error: null,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    clearItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHeroes.pending, handlePending)
      .addCase(getHeroes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.heroes;
        if (!state.totalHeroes) {
          state.totalHeroes = action.payload.totalHeroes;
        }
      })
      .addCase(getHeroes.rejected, handleRejected)
      .addCase(getHeroById.pending, handlePending)
      .addCase(getHeroById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(getHeroById.rejected, handleRejected)
      .addCase(removeHeroById.pending, handlePending)
      .addCase(removeHeroById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload];
      })
      .addCase(removeHeroById.rejected, handleRejected)
      .addCase(updateHero.pending, handlePending)
      .addCase(updateHero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = [action.payload];
      })

      .addCase(updateHero.rejected, handleRejected)
      .addCase(createHero.pending, handlePending)
      .addCase(createHero.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [action.payload];
      })

      .addCase(createHero.rejected, handleRejected);
  },
});

export const { clearItems } = heroesSlice.actions;
export const heroesReducer = heroesSlice.reducer;
