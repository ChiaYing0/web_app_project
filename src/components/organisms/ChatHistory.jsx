import React from "react";
import ChatBubble from "../molecules/ChatBubble";
import ChatInput from "../molecules/ChatInput";

// Mock data 
const data = [
  { text: "Hi there!", isUser: false, timestamp:"2 min ago" },
  { text: "Hello! How are you?", isUser: true, timestamp:"2 min ago" },
  { text: "I'm good, thanks for asking.", isUser: false,  timestamp:"2 min ago" },
]

const ChatHistory = () => (
  <div className="bg-white rounded-xl col-span-2 relative h-full w-full flex flex-col overflow-hidden">
    <div className="sticky z-30 justify-between items-center border-b py-4 p-5 top-0 bg-white flex">
      <h2 className="text-sm font-black text-gray-800 tracking-tight">Chat Room Name</h2>
      <span className="bg-red-500 text-white text-xxs rounded-full px-2 py-1">
        15
      </span>
    </div>
    <div className="flex-1 overflow-y-auto px-5 pb-5">
      <div className="flex flex-col gap-12 py-6 pr-2">
        {data.map((item, index) => (
          <ChatBubble key={index} message={item.text} isUser={item.isUser} />
        ))}
      </div>
    </div>
    <div className="p-5">
      <ChatInput />
    </div>
  </div>
);

export default ChatHistory;
