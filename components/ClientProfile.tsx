"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ClientProfiles = ({ userName }: { userName: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push('/')}>
            <div className="group flex-row w-32 mx-auto">
              <div className="w-32 h-32 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={128}
                  height={128}
                />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {userName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfiles;
