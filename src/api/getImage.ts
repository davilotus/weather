import { createClient } from 'pexels';
import { selectRandomPhoto } from '../utils/selectRandomPhoto';

export const getImage = async (query: string) => {
  const client = createClient(import.meta.env.VITE_PEXELS_APIKEY);

  const result = await client.photos
    .search({ query, per_page: 15, orientation: 'landscape' })
    .then((photos) => {
      const photo = photos && selectRandomPhoto(photos.photos);

      return photo.src.landscape.replace('&h=627&w=1200', '&w=1920');
    })
    .catch((error) => {
      console.log(error);
      return `Erro: ${error}`;
    });

  return result;
};
