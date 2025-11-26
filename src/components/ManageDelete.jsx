"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ManageDelete({ courseId }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const ok = confirm("Are you sure you want to delete this course?");
    if (!ok) return;

    setLoading(true);

    try {
      const res = await fetch(`/api/courses/${courseId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Delete failed");
        setLoading(false);
        return;
      }

      alert("Course deleted successfully!");

      router.refresh(); // refresh the page
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-red-500 to-red-700 ${
        loading
          ? "opacity-50 cursor-not-allowed"
          : "hover:from-red-600 hover:to-red-800"
      } transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105`}
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}
