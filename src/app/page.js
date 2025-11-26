// src/app/page.js
import Link from "next/link";

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "MERN Stack Development",
      image: "https://i.ibb.co.com/7xFzycp2/maxresdefault.jpg",
      description:
        "Learn MongoDB, Express, React, and Node.js to build full-stack web apps.",
    },
    {
      id: 2,
      title: "Python for Beginners",
      image: "https://picsum.photos/seed/python/600/300",
      description:
        "Get started with Python programming and automation projects.",
    },
    {
      id: 3,
      title: "C# Fundamentals",
      image: "https://picsum.photos/seed/csharp/600/300",
      description: "Understand object-oriented programming with C# and .NET.",
    },
    {
      id: 4,
      title: "C++ Programming",
      image: "https://picsum.photos/seed/cpp/600/300",
      description: "Master C++ basics, data structures, and algorithms.",
    },
    {
      id: 5,
      title: "JavaScript Advanced",
      image: "https://picsum.photos/seed/js/600/300",
      description:
        "Deep dive into JS, ES6+, DOM manipulation, and async programming.",
    },
    {
      id: 6,
      title: "Data Science with Python",
      image: "https://picsum.photos/seed/datasci/600/300",
      description:
        "Learn pandas, NumPy, matplotlib, and machine learning basics.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold">Learn. Code. Create.</h1>
          <p className="mt-4 text-gray-600">
            TechCourseHub — Explore courses in programming, data science, and
            modern web development.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/courses"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Browse Courses
            </Link>
            <a href="#features" className="px-4 py-2 rounded-lg border">
              Why TechCourseHub
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/XxxkC1gf/1700032604.jpg"
            className="rounded-lg shadow"
            alt="hero"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold">Curated Courses</h4>
          <p className="text-sm text-gray-600">
            High-quality courses covering all major tech stacks.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold">Hands-On Projects</h4>
          <p className="text-sm text-gray-600">
            Apply your knowledge with practical coding projects.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold">Secure Learning</h4>
          <p className="text-sm text-gray-600">
            Track progress and manage courses safely in your account.
          </p>
        </div>
      </section>

      {/* Courses teaser */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Popular Tech Courses</h2>
        <p className="text-gray-600">
          Start learning with these trending courses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={course.image}
                className="rounded mb-3"
                alt={course.title}
              />
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          “The MERN course helped me land my first dev job!”
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          “Python tutorials were easy to follow and practical.”
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          “Great for coding beginners and pros alike.”
        </div>
      </section>

      {/* Banner */}
      <section className="p-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">
            Start your coding journey today
          </h3>
          <p className="mt-2">Sign up and begin building your first project.</p>
        </div>
      </section>
    </>
  );
}
