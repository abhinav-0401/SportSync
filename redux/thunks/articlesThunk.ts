import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
      const response = await axios.get("/api/articles");
      return response?.data?.list;
    }
  );