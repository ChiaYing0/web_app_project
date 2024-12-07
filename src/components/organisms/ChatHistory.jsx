import React from "react";
import ChatBubble from "../molecules/ChatBubble";
import ChatInput from "../molecules/ChatInput";

// Mock data 
const data = [
  { text: "Hi there!", isUser: false },
  { text: "Hello! How are you?", isUser: true },
  { text: "I'm good, thanks for asking.", isUser: false },
]

const ChatHistory = () => (
  <div className="p-5 bg-white rounded-xl col-span-2 relative h-full w-full flex flex-col overflow-hidden">
    <div className="sticky z-30 justify-between items-center border-b pb-2 top-0 bg-white flex">
      <h2 className="text-lg font-semibold text-gray-800">Chat History</h2>
      <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
        15
      </span>
    </div>
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col gap-12 py-6 pr-2">
        {data.map((item, index) => (
          <ChatBubble key={index} message={item.text} isUser={item.isUser} />
        ))}
        <ChatBubble
          message="Design thinking is a problem-solving approach..."
          isUser={false}
          timestamp="2 min ago"
        />
        <ChatBubble
          message="Just wanted to check in on the e-commerce website code..."
          isUser={true}
          timestamp="2 min ago"
        />
        <ChatBubble
          message="Design thinking is a problem-solving approach..."
          isUser={false}
          timestamp="2 min ago"
        />
        <ChatBubble
          message="Design thinking is a problem-solving approach..."
          isUser={false}
          timestamp="2 min ago"
        />
        <ChatBubble
          message="Just wanted to check in on the e-commerce website code..."
          isUser={true}
          timestamp="2 min ago"
        />
      </div>
    </div>
    <div className="">
      <ChatInput />
    </div>
  </div>
);

export default ChatHistory;
