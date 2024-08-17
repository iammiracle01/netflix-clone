import React from "react";
import prismadb from "@/lib/prismadb";
import { AiOutlineInfoCircle, AiOutlinePlayCircle } from "react-icons/ai";

async function getRandomMovie() {
  const movieCount = await prismadb.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMovie = await prismadb.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return randomMovie[0];
}

const Billboard = async () => {
  const movie = await getRandomMovie();

  return (
    <div className="relative h-[52.5vw]">
      {/* Updated Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-gray-900 opacity-5 0 z-10"></div>

      <video
        className="w-full h-[52.5vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={movie.thumbnailUrl}
        src={movie.videoUrl}
      ></video>

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 z-20">
        <p className="text-white text-xl md:text-5xl lg:text-6xl w-[50%] font-bold drop-shadow-xl leading-tight">
          {movie.title}
        </p>
        <p className="text-white text-[10px] md:text-base lg:text-lg mt-2 md:mt-4 lg:mt-6 max-w-[85%] md:max-w-[75%] lg:max-w-[60%] drop-shadow-md leading-relaxed tracking-wide">
          {movie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-base font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlinePlayCircle className="mr-1" /> Play
          </button>
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-base font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <AiOutlineInfoCircle className="mr-1" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
