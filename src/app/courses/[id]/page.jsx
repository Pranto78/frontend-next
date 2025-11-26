import Link from "next/link";

async function getCourse(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default async function CourseDetail({ params }) {
  const course = await getCourse(params.id);

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
      <img
        src={course.image}
        className="w-full h-64 object-cover rounded mb-4"
        alt={course.title}
      />
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>
      <div className="mt-4 flex items-center gap-4">
        {course.price && (
          <div className="text-2xl font-bold">${course.price}</div>
        )}
        {course.priority && (
          <div className="text-sm text-gray-500">
            Priority: {course.priority}
          </div>
        )}
        <Link href="/courses" className="underline text-blue-600">
          Back
        </Link>
      </div>
    </div>
  );
}
