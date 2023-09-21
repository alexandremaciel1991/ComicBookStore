export interface ComicTypes {
  id: number;
  title: string;
  description: string;
  images: Thumbnail[];
  thumbnail: Thumbnail;
  prices: Price[];
  digitalId: number;
  issueNumber: number;
  isbn: string;
  upc: string;
  format: string;
  pageCount: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

interface Price {
  price: number;
  type: string;
}
