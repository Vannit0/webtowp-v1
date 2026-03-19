export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  alt: string;
  categories: Category[];
  author: Author;
  date: string;
  modified: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  alt: string;
  categories: Category[];
  technologies: string[];
  url: string;
  lighthouseScore: number;
  loadTime: string;
  seoScore: number;
  challenge: string;
  solution: string;
  date: string;
}

export interface Logo {
  id: number;
  title: string;
  imageUrl: string;
  alt: string;
}
