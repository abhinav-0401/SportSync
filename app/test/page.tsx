"use client";
import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const fetchAndConvertBlob = async () => {
    try {
      // Step 1: Fetch the blob from the API
      const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c495790/i.jpg',
        params: {p: 'de', d: 'high'},
        headers: {
          'x-rapidapi-key': `${process.env.RAPIDAPI_KEY}`,
          'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        },
        responseType: 'blob' as const
      };
      
      const response = await axios.request(options);
      const blob = response.data;

      // Step 2: Convert blob to a PNG
      const imageUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.src = imageUrl;
      console.log(imageUrl)

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        
        if (ctx) {
          ctx.drawImage(img, 0, 0);

          // Convert the canvas to a PNG Blob
          canvas.toBlob((pngBlob) => {
            if (pngBlob) {
              const pngUrl = URL.createObjectURL(pngBlob);
              setImageSrc(pngUrl);
              console.log(imageSrc)
            }
          }, 'image/png');
        }
      };
    } catch (error) {
      console.error('Error fetching or converting the blob:', error);
    }
  };

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <button onClick={fetchAndConvertBlob}>Fetch and Convert Image</button>
      {imageSrc && <img src={imageSrc} alt="Converted to PNG" />}
    </div>
  );
}

export default App;
