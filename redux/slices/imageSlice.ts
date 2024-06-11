// src/features/images/imagesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchImage } from '../thunks/imagesThunk';

interface ImagesState {
  [key: string]: string;
}

const initialState: ImagesState = {};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<{ imageId: number; imageUrl: string }>) => {
      state[action.payload.imageId] = action.payload.imageUrl;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImage.fulfilled, (state, action) => {
        state[action.payload.imageId] = action.payload.imageUrl;
      });
  },
});

export const { setImage } = imagesSlice.actions;
export default imagesSlice.reducer;
