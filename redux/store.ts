import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "./slices/articlesSlice";
import imagesReducer from "./slices/imageSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    images: imagesReducer,
  },
})

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch