import React, { useState, useEffect, useRef } from "react";
import { Spin } from "antd";
import ChatBubble from "../molecules/ChatBubble";
import ChatInput from "../molecules/ChatInput";
import { role } from "../../models/chat";
import { postChat, getHistory } from "../../utils/api";

const ChatHistory = ({ accent, scenario }) => {
  // 狀態管理訊息
  const [messages, setMessages] = useState([]);
  const [audioURL, setAudioURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 用於追蹤最後一個訊息的參考
  const lastMessageRef = useRef(null);
  const audioRef = useRef(null);

  // 處理輸入訊息
  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return; // 防止空訊息

    const newEntry = {
      content: newMessage,
      role: role.USER, // 假設為使用者輸入
      timestamp: "Just now", // 簡單處理時間戳
    };

    const cannedReply = {
      content: "STFU ASS!", // 罐頭回覆內容
      role: role.SYSTEM, // 系統回覆
      timestamp: "Just now", // 系統回覆的時間戳
    };

    // 模擬延遲後新增罐頭回覆
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, cannedReply]);
    }, 1000); // 延遲 1 秒回覆

    setMessages((prevMessages) => [...prevMessages, newEntry]); // 更新訊息列表
  };

  const handleAudioSubmit = async (file) => {
    setIsLoading(true);
    try {
      const data = new FormData();
      const fields = { accent, scenario, speech: file };
      Object.entries(fields).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await postChat(data);
      const [audio, ...messages] = res.data.content;

      setAudioURL(audio);
      setMessages((prevMessages) => [...prevMessages, ...messages]);
    } catch (error) {
      console.error("Error during file submission:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (audioURL && audioRef.current) {
      audioRef.current.play(); // 自動播放新音檔
    }
  }, [audioURL]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getHistory(scenario);
      setMessages(res.data);
    };
    fetchData();
  }, []);

  // 滾動到最新訊息
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]); // 當 messages 更新時觸發

  return (
    <div className="bg-white rounded-xl col-span-2 relative h-full w-full flex flex-col overflow-hidden">
      <div className="sticky z-30 justify-between items-center border-b py-4 p-5 top-0 bg-white flex">
        <h2 className="text-sm font-black text-gray-800 tracking-tight">
          Chat Room - {scenario}
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
              message={item.content}
              isUser={item.role === role.USER}
              ref={index === messages.length - 1 ? lastMessageRef : null}
            />
          ))}
          <audio
            ref={audioRef}
            src={audioURL}
            controls={false} // 隱藏播放器控制項
          />
          {isLoading && (
            <div className="flex justify-center items-center" ref={lastMessageRef}>
              <Spin />
            </div>
          )}
        </div>
      </div>
      <div className="p-2">
        <ChatInput
          onSendMessage={handleSendMessage}
          onSendAudio={handleAudioSubmit}
        />
      </div>
    </div>
  );
};

export default ChatHistory;
