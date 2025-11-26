export async function getCourses() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
    }/api/courses`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch courses");
  return res.json();
}
