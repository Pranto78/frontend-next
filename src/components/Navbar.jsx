"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-[#1f2937]">
          Coursely
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/courses">Courses</Link>
          <Link href="#features">Features</Link>
          <Link href="/#">Pricing</Link>
          <Link href="#contact">Contact</Link>

          {!session ? (
            <div className="flex gap-2">
              <button onClick={() => signIn()} className="btn btn-primary">
                Login
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 btn"
              >
                <span>{session.user.name || session.user.email}</span>
                <img
                  src={session.user.image || "/avatar.png"}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow rounded-lg p-2">
                  <div className="text-sm p-2">
                    Signed in as <strong>{session.user.email}</strong>
                  </div>
                  <Link
                    href="/add-course"
                    className="block px-2 py-1 rounded hover:bg-gray-100"
                  >
                    Add Course
                  </Link>
                  <Link
                    href="/manage"
                    className="block px-2 py-1 rounded hover:bg-gray-100"
                  >
                    Manage Courses
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left mt-2 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-2 flex flex-col gap-2">
            <Link href="/courses">Courses</Link>
            <Link href="#features">Features</Link>
            <Link href="#contact">Contact</Link>
            {!session ? (
              <button onClick={() => signIn()} className="btn btn-primary">
                Login
              </button>
            ) : (
              <>
                <Link href="/add-course" className="block py-1">
                  Add Course
                </Link>
                <Link href="/manage" className="block py-1">
                  Manage
                </Link>
                <button onClick={() => signOut()} className="py-1">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
