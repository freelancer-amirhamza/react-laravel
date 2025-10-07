import { useEffect, useState } from "react";
import axios from "../api/axios";
import PostForm from "./PostFrom";


export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
      <PostForm onPostCreated={fetchPosts} />
      <ul className="mt-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-2 mb-2 flex justify-between">
            <div>
              <h3 className="font-bold">{post.title}</h3>
              <p>{post.content}</p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
