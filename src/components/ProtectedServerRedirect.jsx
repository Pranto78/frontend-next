// src/components/ProtectedServerRedirect.jsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtectedServerRedirect() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return null;
}
