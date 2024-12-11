import ChatInfoItem from "../molecules/ChatInfoItem";
import ChatInfoSearchBar from "../molecules/searching/ChatInfoSearchBar";

const ChatInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl space-y-4 overflow-hidden">
      {/* Header */}
      <div className="sticky z-30 justify-between items-center border-b py-4 p-5 top-0 bg-white flex">
        <h2 className="text-sm font-black text-gray-800 tracking-tight">
          Chat Room Name
        </h2>
        <span className="bg-red-500 text-white text-xxs rounded-full px-2 py-1">
          15
        </span>
      </div>

      {/* Search Bar */}
      <div className="w-4/5 mx-auto">
        <ChatInfoSearchBar />
      </div>
      {/* Chat Group Items */}
      <div className="space-y-4 px-6">
        {/* Chat Group Example */}
        <ChatInfoItem
          title="Audio Generate"
          message="Design thinking is a problem-solving approach....."
          time="Just now"
          icons={[
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l7 7-7 7z"
              />
            </svg>,
          ]}
        />
        {/* <ChatGroupItem
          title="Audio Generate"
          message="Design thinking is a problem-solving approach....."
          time="Just now"
          icons={[
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6l7 7-7 7z"
              />
            </svg>,
          ]}
        />
        <ChatGroupItem
          title="E-Commerce Website Code"
          message="Design thinking is a problem-solving approach....."
          time="2 Min ago"
        />
        <ChatGroupItem
          title="Design Thinking"
          message="Design thinking is a problem-solving approach....."
          time="1 Hr ago"
          images={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
          ]}
        />
        <ChatGroupItem
          title="E-Commerce Website Code"
          message="Design thinking is a problem-solving approach....."
          time="Yesterday"
          images={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
          ]}
        /> */}
      </div>

      {/* Add New Group Button */}
      <button className="w-full bg-red-500 text-white rounded-lg py-2 font-semibold text-sm hover:bg-red-600">
        Add New Group
      </button>
    </div>
  );
};

export default ChatInfo;
