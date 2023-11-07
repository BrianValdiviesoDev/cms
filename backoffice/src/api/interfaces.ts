export interface PostResponse {
  uuid: string;
  title: string;
  slug: string;
  author: string;
  active: boolean;
  image: string;
  description: string;
  publishDate: Date;
}

export interface CreatePost {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export interface UpdatePost {
  title: string;
  slug: string;
  image: string;
  description: string;
}
