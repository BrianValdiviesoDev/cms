import { Link } from "react-router-dom";
import "../styles/posts.scss";
import { useEffect, useState } from "react";
import { PostResponse } from "../api/interfaces";
import { listPosts } from "../api/services";
const Posts = () => {
  const [posts, setPosts] = useState<PostResponse[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await listPosts();
      setPosts(response);
    };
    getPosts();
  }, []);
  return (
    <>
      <div className="header">
        <h1>Posts</h1>
        <div className="actions">
          <Link to="/editor/new">
            <button type="button">Add new</button>
          </Link>
        </div>
      </div>
      <div className="grid">
        {posts.map((post) => (
          <div className="card">
            <div className="title">{post.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
