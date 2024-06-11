// src/features/images/imagesThunks.ts
import { blobToBase64, blobToPng } from '@/lib/blobtopng';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchImage = createAsyncThunk(
  'images/fetchImage',
  async (imageId: number) => {
    const imageUrl = `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imageId}/i.jpg`;
    const options = {
      method: 'GET',
      url: imageUrl,
      params: { p: 'de', d: 'high' },
      headers: {
        'x-rapidapi-key': 'c4a782e118msh9292a6e3b3c3e78p17d585jsnd621a07e82ae',
        'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
      },
      responseType: 'blob' as const
    };

    const response = await axios.request(options);
    const blob = response.data;

    const imageRenderableUrl = await blobToPng(blob);
    return { imageId, imageUrl: imageRenderableUrl };
  }
);
