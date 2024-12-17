import React from "react";
import Sidebar from "../organisms/Sidebar";
import ChatHistory from "../organisms/ChatHistory";
import DesignThinking from "../organisms/DesignThinking";
import ChatInfo from "../organisms/ChatInfo";
import { useLocation } from "react-router-dom";

const ChatBotPage = () => {
  const location = useLocation();
  const { accent, scenario } = location.state || {};

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-1 grid grid-cols-3 gap-5 p-5 h-full">
        <ChatInfo />
        <ChatHistory accent={accent} scenario={scenario} />
        {/* <DesignThinking /> */}
      </div>
    </div>
  );
};

export default ChatBotPage;
