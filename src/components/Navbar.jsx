"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation"; // <-- import this

export default function Navbar() {
  const { data: session, status } = useSession();
  const userLoggedIn = status === "authenticated";

  const pathname = usePathname(); // current path

  const getLinkClasses = (href) =>
    `font-medium hover:text-blue-600 transition ${
      pathname === href ? "underline underline-offset-4" : ""
    }`;

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TechCourseHub
        </Link>

        {/* Navlinks */}
        <div className="flex items-center gap-6">
          <Link href="/" className={getLinkClasses("/")}>
            Home
          </Link>

          <Link href="/about" className={getLinkClasses("/about")}>
            About
          </Link>

          {/* ⬇ ONLY visible when logged in */}
          {userLoggedIn && (
            <>
              <Link href="/courses" className={getLinkClasses("/courses")}>
                Courses
              </Link>

              <Link
                href="/add-course"
                className={getLinkClasses("/add-course")}
              >
                Add Course
              </Link>

              <Link href="/manage" className={getLinkClasses("/manage")}>
                Manage Courses
              </Link>
            </>
          )}

          {/* LOGIN / LOGOUT BUTTON */}
          {!userLoggedIn ? (
            <Link
              href="/login"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={() => signOut()}
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
