import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");

  }

  return (
    <>
      <h1 className="text-2xl text-green-500">StreamFlix</h1>
      <LogoutButton />
    </>
  );
}
