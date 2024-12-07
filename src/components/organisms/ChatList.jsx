const ChatList = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl py-5 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 px-4">
        <h2 className="text-lg font-semibold text-gray-800">Chat List</h2>
        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
          15
        </span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
        <input
          type="text"
          placeholder="Search Chat Group"
          className="bg-transparent text-sm w-full outline-none"
        />
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l-4 4m0 0l4 4m-4-4h16m4-4v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8"
            />
          </svg>
        </button>
      </div>

      {/* Chat Group Items */}
      <div className="space-y-4 px-6">
        {/* Chat Group Example */}
        <ChatGroupItem
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
        />
      </div>

      {/* Add New Group Button */}
      <button className="w-full bg-red-500 text-white rounded-lg py-2 font-semibold text-sm hover:bg-red-600">
        Add New Group
      </button>
    </div>
  );
};

const ChatGroupItem = ({ title, message, time, icons, images }) => (
  <div className="flex justify-between items-center border-b pb-2 last:border-none">
    {/* Left: Title and Message */}
    <div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500 truncate">{message}</p>
    </div>

    {/* Right: Time and Icons/Images */}
    <div className="flex items-center space-x-2">
      {/* Icons or Images */}
      {images && (
        <div className="flex -space-x-1">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="avatar"
              className="w-6 h-6 rounded-full border border-white"
            />
          ))}
        </div>
      )}
      {icons &&
        icons.map((icon, index) => (
          <div key={index} className="w-5 h-5">
            {icon}
          </div>
        ))}

      {/* Time */}
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  </div>
);

export default ChatList;
