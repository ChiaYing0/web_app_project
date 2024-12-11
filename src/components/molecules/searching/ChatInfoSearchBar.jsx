import React from "react";
import { FaSearch } from "react-icons/fa";

const ChatInfoSearchBar = () => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
      <input
        type="text"
        placeholder="Search Chat Group"
        className="bg-transparent text-sm w-full outline-none placeholder:text-slate-400 placeholder:font-black text-xs"
      />
      <button className="text-gray-500">
      <FaSearch />
      </button>
    </div>
  );
};

export default ChatInfoSearchBar;
