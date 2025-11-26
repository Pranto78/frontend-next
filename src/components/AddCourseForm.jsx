"use client";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

export default function AddCourseForm() {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    description: "",
    price: "",
    priority: "Normal",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const token = session?.accessToken;

      await axios.post(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/api/courses`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Course added!");

      setForm({
        title: "",
        shortDesc: "",
        description: "",
        price: "",
        priority: "Normal",
        image: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Error adding course");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white shadow-xl p-8 rounded-xl border border-gray-200 space-y-4"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Add New Course
      </h2>

      <input
        name="title"
        required
        value={form.title}
        onChange={handleChange}
        placeholder="Course Title"
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      />

      <input
        name="shortDesc"
        required
        value={form.shortDesc}
        onChange={handleChange}
        placeholder="Short Description"
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      />

      <textarea
        name="description"
        rows={4}
        required
        value={form.description}
        onChange={handleChange}
        placeholder="Full Course Description"
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      ></textarea>

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      >
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
      </select>

      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        className="w-full border p-3 rounded-lg focus:ring focus:ring-blue-200 outline-none"
      />

      <button
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
      >
        {loading ? "Saving..." : "Submit"}
      </button>
    </form>
  );
}
