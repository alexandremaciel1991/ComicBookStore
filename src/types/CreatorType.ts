export interface CreatorType {
  id: number;
  firstName: string;
  lastName: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
