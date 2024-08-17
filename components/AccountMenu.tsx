import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

const AccountMenu = ({ visible }: { visible?: boolean }) => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/current');
        const data = await response.json();
        if (data.error) {
          console.error(data.error);
          return;
        }
        setUsername(data.name);
      } catch (error) {
        console.error('Failed to fetch user details', error);
      }
    };

    fetchUser();
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex flex-col border-2 border-gray-800 shadow-lg rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full relative hover:bg-gray-700 p-2 rounded-md transition duration-200 ease-in-out">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            {username || 'Username'}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-2" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
