import { PhotoProps } from '../types/photo.type';

export const selectRandomPhoto = (array: PhotoProps[]) => {
  const objectArray = Object.keys(array);
  const randomIndex = Math.floor(Math.random() * objectArray.length);
  const selectedItem = array[randomIndex];

  const imageUrl = selectedItem.src.landscape;
  return imageUrl.replace('&h=627&w=1200', '&w=1920');
};
