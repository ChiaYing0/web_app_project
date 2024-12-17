import React from "react";

const ChatInputButton = ({ content, tooltip }) => {
  return (
    <div className="relative group">
      {/* 按鈕 */}
      <button
        onClick={() => console.log(tooltip)}
        className="p-2 bg-white rounded-lg hover:bg-gray-300"
      >
        {content}
      </button>

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max bg-black text-white text-xs font-medium px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltip}
      </span>
    </div>
  );
};

export default ChatInputButton;
