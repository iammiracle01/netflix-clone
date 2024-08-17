import { signOut } from "next-auth/react";
import Image from "next/image";
const AccountMenu = ({ visible }: { visible?: boolean }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full relative">
          <Image
            src="/images/profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-md"
          />
          <p className="text-white text-sm group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-2" />
        <div onClick={() => signOut()} className="px-3 text-center text-white text-sm hover:underline">
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
