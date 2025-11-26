// src/app/manage/page.jsx
import ProtectedServerRedirect from "../../components/ProtectedServerRedirect";
import CourseCard from "../../components/CourseCard";
import { getCourses } from "../../lib/fetcher";
import dynamic from "next/dynamic";

const ManageDelete = dynamic(() => import("../../components/ManageDelete"), {
  ssr: false,
}).catch(() => null);

export default async function ManagePage() {
  await ProtectedServerRedirect();
  const courses = await getCourses();
  return (
    <>
      <h1 className="text-2xl font-semibold">Manage Courses</h1>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <div key={c.id} className="bg-white rounded-lg p-4 shadow">
            <img
              src={c.image}
              className="h-40 object-cover rounded mb-2"
              alt={c.title}
            />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{c.shortDesc}</p>
            <div className="mt-3 flex gap-2">
              <a href={`/courses/${c.id}`} className="underline">
                View
              </a>
              {/* Delete handled client-side component for authorization */}
              <ManageDelete courseId={c.id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
