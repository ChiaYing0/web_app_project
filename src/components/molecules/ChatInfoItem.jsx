import React from "react";

const ChatInfoItem = ({ title, message, time, icons, images }) => (
  <div className="flex flex-col justify-between border-t py-4">
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xxs font-bold">{time}</p>
    </div>
    <div>
      <p className="text-xs text-gray-500 truncate">{message}</p>
    </div>
  </div>
);

export default ChatInfoItem;
