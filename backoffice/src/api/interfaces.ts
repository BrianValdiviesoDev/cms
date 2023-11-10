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

export interface PostDto {
  title: string;
  slug: string;
  image?: string;
  description?: string;
  content?: string;
  active: boolean;
}
