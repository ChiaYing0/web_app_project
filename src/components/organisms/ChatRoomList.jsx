import React from "react";

const ChatRoomList = ({ title, participants, topic, accent }) => {
  return (
    <div className="w-52 h-52 bg-white rounded-2xl">
      {/* Cover Picture */}
      <div className="h-3/5"></div>
      {/* Info */}
      <div className="h-2/5">
        <div className="text-md pl-4 font-semibold">{title}</div>
        {/* Detail */}
        <div className="text-xs pl-4 mt-1 flex gap-3">
          {/* Title */}
          <div>
            <div>
              <p>人數</p>
            </div>
            <div>
              <p>主題</p>
            </div>
            <div>
              <p>口音</p>
            </div>
          </div>
          {/* Content */}
          <div>
            <div>
              <p>{participants}</p>
            </div>
            <div>
              <p>{topic}</p>
            </div>
            <div>
              <p>{accent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomList;
