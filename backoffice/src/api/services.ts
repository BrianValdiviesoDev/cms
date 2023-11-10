import axios from "axios";
import { PostDto } from "./interfaces";

const base_url = import.meta.env.VITE_SOME_KEY || "http://localhost:3001";
export const listPosts = async () => {
  const response = await axios.get(`${base_url}/posts/`);
  return response.data;
};

export const createPost = async (post: PostDto) => {
  const response = await axios.post(`${base_url}/posts/`, post);
  return response.data;
};

export const updatePost = async (post: PostDto, id: string) => {
  const response = await axios.put(`${base_url}/posts/${id}`, post);
  return response.data;
};

export const readPost = async (id: string) => {
  const response = await axios.get(`${base_url}/posts/${id}`);
  return response.data;
};

export const publishPost = async (id: string) => {
  const response = await axios.put(`${base_url}/posts/publish/${id}`);
  return response.data;
};

export const draftPost = async (id: string) => {
  const response = await axios.put(`${base_url}/posts/draft/${id}`);
  return response.data;
};

export const removePost = async (id: string) => {
  const response = await axios.delete(`${base_url}/posts/${id}`);
  return response.data;
};
