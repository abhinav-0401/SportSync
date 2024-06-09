import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface ArticlesState {
  articles: any;
}

// Define the initial state using that type
const initialState: ArticlesState = {
  articles: null,
}

export const articlesSlice = createSlice({
  name: 'articles',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
})

export const { setArticles } = articlesSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectArticles = (state: RootState) => state.articles.articles;

export default articlesSlice.reducer