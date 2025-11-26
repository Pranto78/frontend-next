// /app/courses/[id]/page.js
import Link from "next/link";

// Fetch course by ID from backend
async function getCourse(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/${id}`,
      { cache: "no-store" } // always get fresh data
    );

    if (!res.ok) {
      console.error("Failed to fetch course:", res.status);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

// Server Component
export default async function CourseDetail({ params }) {
  // Unwrap params correctly
  const { id } = await params;

  // Fetch course data
  const course = await getCourse(id);

  if (!course) {
    return (
      <div className="text-center mt-10 text-red-600">
        Course not found.
        <div className="mt-4">
          <Link href="/courses" className="underline text-blue-600">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Course image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded mb-4"
      />

      {/* Title & Description */}
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      {/* Price, Priority, Back link */}
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {course.price && (
          <div className="text-2xl font-bold">${course.price}</div>
        )}
        {course.priority && (
          <div className="text-sm text-gray-500">
            Priority: {course.priority}
          </div>
        )}
        <Link
          href="/courses"
          className="inline-block px-6 py-2 mt-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Back to Courses
        </Link>
        <Link
          href="/"
          className="inline-block px-6 py-2 mt-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Buy Course
        </Link>
      </div>
    </div>
  );
}
