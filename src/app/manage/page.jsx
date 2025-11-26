import ProtectedServerRedirect from "../../components/ProtectedServerRedirect";
import { getCourses } from "../../lib/fetcher";
import ManageDelete from "@/components/ManageDelete";

export default async function ManagePage() {
  await ProtectedServerRedirect();
  const courses = await getCourses();

  return (
    <>
      {/* Page Title */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-800">
          Manage Courses
        </h1>
      </div>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c.id}
            className="
              bg-white rounded-xl shadow-md p-4 
              hover:shadow-xl transition-all duration-300 
              border border-gray-200
              flex flex-col
              h-full
            "
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={c.image}
                alt={c.title}
                className="
                  h-44 w-full object-cover rounded-lg 
                  hover:scale-105 transition-transform duration-300
                "
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg mt-3 text-gray-900 line-clamp-1">
              {c.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-1 line-clamp-3 flex-grow">
              {c.shortDesc}
            </p>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              {/* View Button */}
              <a
                href={`/courses/${c.id}`}
                className="
                  flex-1
                  px-4 py-2 rounded-lg text-sm font-medium 
                  bg-blue-600 text-white
                  hover:bg-blue-700 
                  transition-all duration-200 
                  shadow-sm hover:shadow-md
                  text-center
                "
              >
                View
              </a>

              {/* Delete Button */}
              <ManageDelete
                courseId={c.id}
                className="
                  flex-1
                  px-4 py-2 rounded-lg text-sm font-medium 
                  bg-red-600 text-white
                  hover:bg-red-700 
                  transition-all duration-200 
                  shadow-sm hover:shadow-md
                  text-center
                  cursor-pointer
                "
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
