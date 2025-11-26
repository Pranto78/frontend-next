"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function AddCourseForm() {
  const { data: session } = useSession();
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [priority, setPriority] = useState("Normal");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const token = session?.accessToken;
      await axios.post(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/courses`,
        {
          title,
          shortDesc,
          description,
          price,
          image,
          priority,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Course added");
      setTitle("");
      setShortDesc("");
      setDescription("");
      setPrice(0);
      setImage("");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error adding course");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 bg-white p-6 rounded shadow">
      <input
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border p-2 rounded"
      />
      <input
        required
        value={shortDesc}
        onChange={(e) => setShortDesc(e.target.value)}
        placeholder="Short description"
        className="border p-2 rounded"
      />
      <textarea
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Full description"
        className="border p-2 rounded"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        className="border p-2 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
      >
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
      </select>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL (optional)"
        className="border p-2 rounded"
      />
      <button disabled={loading} className="btn btn-primary">
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
