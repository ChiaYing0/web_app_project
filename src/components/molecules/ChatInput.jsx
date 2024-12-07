import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import useMicrophoneRecorder from "../../utils/useMicrophoneRecorder";
import ChatInputButton from "../atoms/ChatInputButton";
import { FaFileUpload } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FiSend } from "react-icons/fi";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState("");

  // 使用錄音 Hook
  const { isRecording, audioURL, startRecording, stopRecording } =
    useMicrophoneRecorder();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    alert(`輸入的內容：${inputValue}`);
    setInputValue(""); // 清空輸入框
  };

  const handleButtonClick = (label) => {
    alert(`${label} 按鈕被點擊`);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 pb-4 rounded-lg shadow-md mt-3">
      {/* 上方按鈕組 */}
      <div className="flex justify-start gap-2 w-full mb-2 p-2 pl-4 bg-[#D5DAE7] rounded-t-lg">
        <ChatInputButton content={<SlCalender />} />
        <ChatInputButton content={<FaRegBookmark />} />
        <ChatInputButton content={<FaFileUpload />} />
      </div>

      {/* 下方輸入區 */}
      <div className="relative w-full pl-4 flex my-2">
        {/* 語音圖標 */}
        <button
          onClick={() => {
            if (isRecording) {
              stopRecording();
            } else {
              startRecording();
            }
          }}
          className={`p-2 rounded-full ${
            isRecording ? "bg-red-500 text-white" : "bg-gray-300 text-gray-600"
          } hover:bg-gray-400`}
          title={isRecording ? "停止錄音" : "開始錄音"}
        >
          <FaMicrophone />
        </button>
        {/* <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          
        </span> */}
        {/* 無邊框輸入框 */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ask Me anything ...."
          className="w-full pl-8 pr-12 py-1 bg-gray-100 focus:outline-none text-gray-700"
        />
        {/* 發送按鈕 */}
        <button
          onClick={handleSendClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#D5DAE7] text-white rounded-full hover:bg-blue-600"
          title="Send"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
