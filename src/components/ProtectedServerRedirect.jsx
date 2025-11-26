// Server component
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function ProtectedServerRedirect() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return null;
}
