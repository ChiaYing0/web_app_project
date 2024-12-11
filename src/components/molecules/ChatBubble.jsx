import React from "react";
import ChatBubbleButton from "../atoms/ChatBubbleButton";
import { FaRegHeart } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { HiArrowUturnRight } from "react-icons/hi2";
import { IoMdLink } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";


const ChatBubble = ({ message, isUser, timestamp }) => {
  return (
    <div
      className={`${
        isUser ? "self-end" : "self-start"
      } relative bg-gray-200 rounded-lg shadow-md p-4 space-y-4 w-4/5 text-xs`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="">
              <RxSpeakerLoud />
            </div>
            <div className="">
              <FaRegHeart />
            </div>
          </div>
          {/* 時間戳，靠右對齊 */}
          <div className="text-gray-500 text-xs text-right">{timestamp}</div>
        </div>
        {/* 訊息區塊 */}
        <div className="text-gray-800">{message}</div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="">
            <FaRegThumbsUp />
            </div>
            <div className="">
            <FaRegThumbsDown />
            </div>
          </div>
        </div>
      </div>
      {/* 按鈕群組 */}
      <div className="absolute -bottom-4 left-4 flex justify-end space-x-2">
        <ChatBubbleButton text={"Copy Text"} icon={<FaRegCopy/>}/>
        <ChatBubbleButton text={"Regenerated Response"} icon={<HiArrowUturnRight/>} />
        <ChatBubbleButton text={"Copy Link"} icon={<IoMdLink/>} />
        <ChatBubbleButton text={"Share"} icon={<IoShareSocialOutline/>} />
      </div>
    </div>
  );
};

export default ChatBubble;
