import { Document } from "mongoose";

export interface PostDocument extends Document {
  uuid: string;
  title: string;
  slug: string;
  author: string;
  active: boolean;
  image: string;
  description: string;
  content: string;
  createadAt: Date;
  updatedAt: Date;
  publishDate: Date;
}

export interface PostResponse {
  uuid: string;
  title: string;
  slug: string;
  author: string;
  active: boolean;
  image: string;
  description: string;
  content: string;
  publishDate: Date;
}

export interface CreatePost {
  title: string;
  slug: string;
  image?: string;
  description?: string;
  content?: string;
}

export interface UpdatePost {
  title?: string;
  slug?: string;
  image?: string;
  description?: string;
  content?: string;
}
