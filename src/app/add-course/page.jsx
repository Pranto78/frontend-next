// src/app/add-course/page.jsx
import ProtectedServerRedirect from "../../components/ProtectedServerRedirect";
import dynamic from "next/dynamic";

const AddCourseForm = dynamic(() => import("../../components/AddCourseForm"), {
  ssr: false,
});

export default async function AddCoursePage() {
  await ProtectedServerRedirect();
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add Course</h1>
      <AddCourseForm />
    </div>
  );
}
