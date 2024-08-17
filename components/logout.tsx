import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <div
      onClick={() => signOut()}
      className="px-3 text-center text-white text-sm hover:underline cursor-pointer hover:text-gray-300 transition duration-200 ease-in-out"
    >
      Sign out of Netflix
    </div>
  );
};

export default Logout;
