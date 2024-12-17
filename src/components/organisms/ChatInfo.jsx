import ChatInfoItem from "../molecules/ChatInfoItem";
import ChatInfoSearchBar from "../molecules/searching/ChatInfoSearchBar";

const ChatInfo = () => {
  return (
    <div className="relative bg-white rounded-xl shadow-xl space-y-4 overflow-hidden h-full flex flex-col">
      {/* Header */}
      <div className="sticky z-30 justify-between items-center border-b py-4 p-5 top-0 bg-white flex">
        <h2 className="text-sm font-black text-gray-800 tracking-tight">
          Chat Information
        </h2>
        <span className="bg-red-500 text-white text-xxs rounded-full px-2 py-1">
          15
        </span>
      </div>

      {/* Search Bar */}
      <div className="w-4/5 mx-auto flex-none">
        <ChatInfoSearchBar />
      </div>
      {/* Chat Group Items */}
      <div className="space-y-4 px-6 overflow-y-auto flex-1">
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
          content="FUNNN"
        />
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
        <ChatInfoItem
          title="E-Commerce Website Code"
          message="Design thinking is a problem-solving approach....."
          time="2 Min ago"
        />
        <ChatInfoItem
          title="Design Thinking"
          message="Design thinking is a problem-solving approach....."
          time="1 Hr ago"
          images={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
          ]}
        />
        <ChatInfoItem
          title="E-Commerce Website Code"
          message="Design thinking is a problem-solving approach....."
          time="Yesterday"
          images={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
          ]}
        />
        <ChatInfoItem
          title="E-Commerce Website Code"
          message="Design thinking is a problem-solving approach....."
          time="Yesterday"
          images={[
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
            "https://via.placeholder.com/40",
          ]}
        />
      </div>

      {/* Add New Group Button */}
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white font-semibold text-sm py-3 px-8 rounded-lg shadow-lg backdrop-blur-md bg-opacity-80 hover:bg-red-600">
        Add New Group
      </button>
    </div>
  );
};

export default ChatInfo;
