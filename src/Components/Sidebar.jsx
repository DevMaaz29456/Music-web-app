import React from "react";
import { FaArrowsAltH, FaHome, FaPlusCircle, FaSearch } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="h-[15%] bg-[#121212] flex-col flex rounded justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <FaHome className="w-6" />
          <p className="font-bold">Home</p>
        </div>
      </div>
      <div className="h-[15%] bg-[#121212] flex-col flex rounded justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <FaSearch className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <GiStack className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowsAltH className="w-5" />
            <FaPlusCircle className="w-5" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl">
          <h1>Start your first playlist</h1>
          <p className="font-light">
            Creating a playlist is simple, let us guide you.
          </p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl mt-4">
          <h1>Discover podcasts to follow</h1>
          <p className="font-light">Stay updated with the latest episodes.</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
