import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{course.shortDesc}</p>
      <div className="flex justify-between items-center mt-3">
        <div className="text-indigo-600 font-semibold">${course.price}</div>
        <Link href={`/courses/${course.id}`} className="text-sm underline">
          Details
        </Link>
      </div>
    </div>
  );
}
