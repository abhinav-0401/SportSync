export const blobToPng = (blob: Blob): Promise<string> => {
    return new Promise((resolve) => {
      const imageUrl = URL.createObjectURL(blob);
      const img = new window.Image();
      img.src = imageUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');

        if (ctx) {
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((pngBlob) => {
            if (pngBlob) {
              const pngUrl = URL.createObjectURL(pngBlob);
              resolve(pngUrl);
            }
          }, 'image/png');
        }
      };
    });
  };