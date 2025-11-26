// src/app/courses/page.jsx
import CourseCard from "../../components/CourseCard";
import { getCourses } from "../../lib/fetcher";

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <>
      <h1 className="text-2xl font-semibold">Courses</h1>
      <p className="text-gray-600">Browse available courses</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </>
  );
}
