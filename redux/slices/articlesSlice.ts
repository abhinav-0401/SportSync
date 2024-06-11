import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store'
import { fetchArticles } from '../thunks/articlesThunk';

interface Article {
  story: {
    id: number;
    hline: string;
    intro: string;
    pubTime: string;
    source: string;
    storyType: string;
    imageId: number;
    seoHeadline: string;
    context: string;
    coverImage: {
      id: string;
      caption: string;
      source: string;
    };
    entitlements: object;
    adsType: object;
  };
}

// Define a type for the slice state
interface ArticlesState {
  articles: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Define the initial state using that type
const initialState: ArticlesState = {
  articles: [],
  status: 'idle',
  error: null,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch articles';
      });
  }
});

export default articlesSlice.reducer;