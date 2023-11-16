import { PhotosProps } from '../types/photos.types';

export const getImage = async (query: string): Promise<PhotosProps[]> => {
  const pexelsKeys = import.meta.env.VITE_PEXELS_APIKEY;

  const headers = new Headers({ Authorization: pexelsKeys });

  const options = {
    headers: headers,
  };

  const result = await fetch(
    `https://api.pexels.com/v1/search?query=${query}&per_page=15&orientation=landscape`,
    options
  )
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      return data.photos;
    });

  return [{ photos: result }];
};
