import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import ClientProfiles from "@/components/ClientProfile";

export default async function ProfilesPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/auth");

    }

    const userName = session?.user?.name || 'User';

    return (
      <ClientProfiles userName={userName} />
    );
  }