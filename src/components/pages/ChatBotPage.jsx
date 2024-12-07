import React from 'react';
import Sidebar from '../organisms/Sidebar';
import ChatHistory from '../organisms/ChatHistory';
import DesignThinking from '../organisms/DesignThinking';
import ChatList from '../organisms/ChatList';

const ChatBotPage = () => (
  <div className="flex h-screen bg-gray-800">
    <Sidebar />
    <div className="flex-1 grid grid-cols-3 gap-5 p-5 h-full">
      <ChatHistory />
      {/* <ChatList /> */}
      {/* <DesignThinking /> */}
    </div>
  </div>
);

export default ChatBotPage;