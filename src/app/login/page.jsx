// src/app/login/page.jsx
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
        {
          email,
          password,
          fullName,
        }
      );
      toast.success("Registered. Please login.");
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
    <div className="max-w-md mx-auto">
      <Toaster />
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">
          {mode === "login" ? "Login" : "Register"}
        </h2>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => signIn("google")}
            className="px-3 py-2 border rounded"
          >
            Sign in with Google
          </button>
        </div>

        <form
          onSubmit={mode === "login" ? handleLogin : handleRegister}
          className="flex flex-col gap-3"
        >
          {mode === "register" && (
            <input
              placeholder="Full name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border p-2 rounded"
            />
          )}
          <input
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            placeholder="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              {mode === "login" ? "Login" : "Register"}
            </button>
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-sm underline"
            >
              Switch to {mode === "login" ? "register" : "login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
