const MobileMenu = ({ visible }: { visible?: boolean }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800 shadow-lg rounded-lg">
      <div className="flex flex-col gap-4">
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          Home
        </div>
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          Series
        </div>
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          Films
        </div>
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          New & Popular
        </div>
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          My List
        </div>
        <div className="px-3 py-2 text-center text-white hover:underline hover:text-gray-300 transition duration-200 ease-in-out">
          Browse by Languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
