import { PhotoProps } from '../types/photo.type';

export const selectRandomPhoto = (arr: PhotoProps[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  return item;
};
