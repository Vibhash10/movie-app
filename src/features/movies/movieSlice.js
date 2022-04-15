import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

export const movieSlice = createSlice({
  name: "moviesName",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.moviesName.movies;
export default movieSlice.reducer;
