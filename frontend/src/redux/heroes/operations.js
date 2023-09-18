import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const { REACT_APP_BACKEND_URL_DEVELOPMENT, REACT_APP_BACKEND_URL_PRODUCTION } =
//   process.env;

export const instance = axios.create({
  baseURL: "http://localhost:5050",
  // process.env["NODE_ENV"] === "development"
  //   ? REACT_APP_BACKEND_URL_DEVELOPMENT
  //   : REACT_APP_BACKEND_URL_PRODUCTION,
});

export const getHeroes = createAsyncThunk(
  "heroes/getHeroes",
  async (page, thunkAPI) => {
    try {
      const res = await instance.get(`/api/heroes?page=${page}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHeroById = createAsyncThunk(
  "heroes/getHeroById",
  async (id, thunkAPI) => {
    try {
      const res = await instance.get(`/api/heroes/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const removeHeroById = createAsyncThunk(
  "heroes/removeHeroById",
  async (id, thunkAPI) => {
    try {
      const res = await instance.delete(`/api/heroes/${id}`);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateHero",
  async (data, thunkAPI) => {
    try {
      const resp = await instance.patch(
        `/api/heroes/${data.id}`,
        data.formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const createHero = createAsyncThunk(
  "heroes/createHero",
  async (data, thunkAPI) => {
    try {
      const resp = await instance.post(`/api/heroes/`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);
