import React, { forwardRef } from "react";
import ChatBubbleButton from "../atoms/ChatBubbleButton";
import { FaRegHeart } from "react-icons/fa";
import { RxSpeakerLoud } from "react-icons/rx";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { HiArrowUturnRight } from "react-icons/hi2";
import { IoMdLink } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const ChatBubble = forwardRef(({ message, isUser, timestamp }, ref) => {
  return (
    <div
      ref={ref}
      className={`${
        isUser ? "self-end bg-[#FCE8E7]" : "self-start bg-[#D5DAE7]"
      } relative flex gap-4 rounded-lg shadow-md p-4 w-4/5 text-xs`}
    >
      <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
      <div className="flex flex-col gap-6 justify-start">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="">
              <RxSpeakerLoud className="text-lg" />
            </div>
            <div className="">
              <FaRegHeart className="text-lg" />
            </div>
          </div>
          {/* 時間戳，靠右對齊 */}
          <div className="text-gray-500 text-xs text-right">{timestamp}</div>
        </div>
        {/* 訊息區塊 */}
        <div className="text-gray-800 font-medium">{message}</div>
        {!isUser && (
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div>
                <FaRegThumbsUp className="text-lg" />
              </div>
              <div>
                <FaRegThumbsDown className="text-lg" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* 按鈕群組 */}
      <div className="absolute -bottom-4 left-4 flex justify-end space-x-2">
        <ChatBubbleButton text={"Copy Text"} icon={<FaRegCopy />} />
        <ChatBubbleButton
          text={"Regenerated Response"}
          icon={<HiArrowUturnRight />}
        />
        <ChatBubbleButton text={"Copy Link"} icon={<IoMdLink />} />
        <ChatBubbleButton text={"Share"} icon={<IoShareSocialOutline />} />
      </div>
    </div>
  );
});

export default ChatBubble;
