import axios from "axios";

const base_url = import.meta.env.VITE_SOME_KEY || "http://localhost:3001";
export const listPosts = async () => {
  const response = await axios.get(`${base_url}/posts/`);
  return response.data();
};
