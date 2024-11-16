import type { StaticImageData } from 'next/image';

export type ProductCharacteristics = {
  title: string;
  text: string;
};

export type ProductType = {
  slug: string;
  name: string;
  coverImage: StaticImageData | string;
  currentPrice: number;
  previousPrice: number;
  category: string;
  rating: number;
  reviews: number;
  pieces_sold: number;
  onSale?: boolean;
  justIn?: boolean;
  colorOptions?: string[];
  sizeOptions?: string[];
  inStock?: number;
  shots: StaticImageData[];
  sku: string;
  overview: string;
  characterData: ProductCharacteristics[];
};

export type ProductCartType = {
  product: ProductType;
  quantity: number;
};

export type BlogData = {
  sectionOne: {
    title: string;
    paragraph1: string;
    points: string[];
    paragraph2: string;
  };
  sectionTwo: {
    title: string;
    description: string;
    midImage: string;
  };
  sectionThree: {
    title: string;
    description: string;
  };
  sectionFour: {
    title: string;
    description: string;
    points: string[];
  };
  quote: string;
  sectionFive: {
    title: string;
    description: string;
  }[];
};

export type BlogType = {
  title: string;
  brief: string;
  date: string;
  coverImage: string;
  blogData: BlogData;
  tag: 'Style' | 'Fitting' | 'General';
  slug: string;
};
