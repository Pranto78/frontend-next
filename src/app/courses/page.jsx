import Link from "next/link";

async function getCourses() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/courses`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch courses:", res.status);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

export default async function CoursesPage() {
  const courses = await getCourses();

  if (!courses.length) {
    return <div className="text-center mt-10">No courses found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Courses</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-44 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <h3 className="font-semibold text-lg mt-3 text-gray-900 line-clamp-1">
              {course.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 flex-grow line-clamp-3">
              {course.shortDesc || course.description}
            </p>

            <Link href={`/courses/${course.id}`}>
              <button className="mt-4 w-full px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md">
                View Course
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
