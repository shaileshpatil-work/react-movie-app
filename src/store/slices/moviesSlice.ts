import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axiosInstance from "../api/axiosInstance";
import { IMovie } from "../../models/movie";

interface IInitialState {
  isLoading: boolean;
  error: undefined;
  movies: IMovie[];
  movieDetails: IMovie | null;
}

const initialState: IInitialState = {
  isLoading: false,
  error: undefined,
  movies: [],
  movieDetails: null,
};

export const fetchmovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/?apikey=c5e8eda8&s=harry");
      return res.data;
    } catch (error: any) {
      console.log("Error in fetching movies", error);
      return rejectWithValue(
        error.response?.data?.Error || "Failed to fetch movies"
      );
    }
  }
);

export const fetchmovieDetails = createAsyncThunk(
  "movies/fetchmovieDetails",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(
        `/?apikey=c5e8eda8&i=${id}&Plot=full`
      );
      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data.Error || "Failed to fetch movie details"
      );
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchmovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchmovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.Search;
    });
    builder.addCase(fetchmovies.rejected, (state, action) => {
      state.isLoading = false;
      state.movies = [];
      state.error = action.payload;
    });
    builder.addCase(fetchmovieDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchmovieDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieDetails = action.payload;
    });
    builder.addCase(fetchmovieDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const moviesSelector = (state: RootState) => state.movies;

export default moviesSlice.reducer;
