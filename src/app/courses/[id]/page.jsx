// src/app/courses/[id]/page.jsx
import Link from "next/link";

async function getCourse(id) {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
    }/api/courses/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function CourseDetail({ params }) {
  const course = await getCourse(params.id);
  if (!course) return <div>Not found</div>;

  return (
    <div>
      <img
        src={course.image}
        className="w-full h-64 object-cover rounded mb-4"
        alt={course.title}
      />
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <div className="mt-4 flex items-center gap-4">
        <div className="text-2xl font-bold">${course.price}</div>
        <div className="text-sm text-gray-500">Priority: {course.priority}</div>
        <Link href="/courses" className="underline">
          Back
        </Link>
      </div>
    </div>
  );
}
