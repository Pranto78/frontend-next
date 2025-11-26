"use client";

// import { signIn } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await axios.post(
        `${
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000"
        }/auth/register`,
        { email, password, fullName }
      );
      toast.success("Registered successfully! Please login.");
      setMode("login");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Register error");
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    await signIn("credentials", {
      redirect: true,
      email,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <Toaster />

      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {mode === "login" ? "Welcome Back 👋" : "Create Account"}
        </h2>

        {/* Google Sign In */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 bg-white border rounded-lg py-2 shadow hover:bg-gray-50 transition mb-5"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span className="font-medium">Continue with Google</span>
        </button>

        <div className="relative my-4">
          <div className="border-t"></div>
          <span className="absolute left-1/2 -top-3 -translate-x-1/2 bg-white px-3 text-sm text-gray-500">
            OR
          </span>
        </div>

        <form
          onSubmit={mode === "login" ? handleLogin : handleRegister}
          className="flex flex-col gap-4"
        >
          {mode === "register" && (
            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none mt-1"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-purple-600 font-semibold hover:underline"
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
