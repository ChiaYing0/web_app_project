import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../molecules/ChatBubble";
import ChatInput from "../molecules/ChatInput";

// Mock data
const chatData = [
  { text: "Hi there!", isUser: false, timestamp: "2 min ago" },
  { text: "Hello! How are you?", isUser: true, timestamp: "2 min ago" },
  {
    text: "I'm good, thanks for asking.",
    isUser: false,
    timestamp: "2 min ago",
  },
];

const ChatHistory = () => {
  // 狀態管理訊息
  const [messages, setMessages] = useState(chatData);

  // 用於追蹤最後一個訊息的參考
  const lastMessageRef = useRef(null);

  // 處理輸入訊息
  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return; // 防止空訊息

    const newEntry = {
      text: newMessage,
      isUser: true, // 假設為使用者輸入
      timestamp: "Just now", // 簡單處理時間戳
    };

    const cannedReply = {
      text: "STFU ASS!", // 罐頭回覆內容
      isUser: false, // 系統回覆
      timestamp: "Just now", // 系統回覆的時間戳
    };

    // 模擬延遲後新增罐頭回覆
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, cannedReply]);
    }, 1000); // 延遲 1 秒回覆

    setMessages((prevMessages) => [...prevMessages, newEntry]); // 更新訊息列表
  };

  // 滾動到最新訊息
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // 當 messages 更新時觸發

  return (
    <div className="bg-white rounded-xl col-span-2 relative h-full w-full flex flex-col overflow-hidden">
      <div className="sticky z-30 justify-between items-center border-b py-4 p-5 top-0 bg-white flex">
        <h2 className="text-sm font-black text-gray-800 tracking-tight">
          Chat Room Name
        </h2>
        <span className="bg-red-500 text-white text-xxs rounded-full px-2 py-1">
          {messages.length}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto px-5 pb-5">
        <div className="flex flex-col gap-12 py-6 pr-2">
          {messages.map((item, index) => (
            <ChatBubble
              key={index}
              message={item.text}
              isUser={item.isUser}
              ref={index === messages.length - 1 ? lastMessageRef : null}
            />
          ))}
        </div>
      </div>
      <div className="p-2">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatHistory;
