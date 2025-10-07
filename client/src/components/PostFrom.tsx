import { useState } from "react";
import axios from "../api/axios";


export default function PostForm({ onPostCreated }) {
  const [form, setForm] = useState({ title: "", content: "" });
 console.log(form,"form")
  const handleSubmit = async () => {
    e.preventDefault();
    const res = await axios.post("/posts", form);
    onPostCreated(res.data);
    setForm({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="border p-2 w-full"
        placeholder="Content"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
      />
      <button type="submit" className="">Add Post</button>
    </form>
  );
}
