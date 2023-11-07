import { PhotoProps } from './photo.type';

export interface PhotosPaged {
  next_page: string;
  page: number;
  per_page: number;
  photos: PhotoProps[];
}
