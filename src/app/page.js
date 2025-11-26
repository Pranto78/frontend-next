// src/app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold">Learn. Build. Ship.</h1>
          <p className="mt-4 text-gray-600">
            Coursely — A minimal course management demo built with Next.js and
            NextAuth.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/courses"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Browse Courses
            </Link>
            <a href="#features" className="px-4 py-2 rounded-lg border">
              Why Coursely
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://picsum.photos/seed/hero/900/500"
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
            High-quality content to learn modern web development.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold">Responsive UI</h4>
          <p className="text-sm text-gray-600">Looks great on any device.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h4 className="font-semibold">Secure Auth</h4>
          <p className="text-sm text-gray-600">
            Logged-in users can add and manage courses.
          </p>
        </div>
      </section>

      {/* Courses teaser */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Popular courses</h2>
        <p className="text-gray-600">A few highlights to get you started.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={`https://picsum.photos/seed/course${i}/600/300`}
                className="rounded mb-3"
                alt={`course ${i}`}
              />
              <h3 className="font-semibold">Course {i}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                Short course summary goes here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-10 grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">“Great course!”</div>
        <div className="p-6 bg-white rounded-lg shadow">
          “Loved the hands-on approach.”
        </div>
        <div className="p-6 bg-white rounded-lg shadow">“Would recommend.”</div>
      </section>

      {/* Banner */}
      <section className="p-8 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold">Start creating courses today</h3>
          <p className="mt-2">Sign up and add your first course.</p>
        </div>
      </section>
    </>
  );
}
