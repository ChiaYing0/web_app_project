import React from "react";
import ChatRoomList from "../organisms/ChatRoomList";


const ChatRoomData = [
  {
    title: "世界冠軍",
    participants: "10",
    topic: "AI 訓練營",
    accent: "美式"
  },
  {
    title: "創新科技講座",
    participants: "50+",
    topic: "人工智慧與雲端運算",
    accent: "英式"
  },
  {
    title: "未來領袖論壇",
    participants: "不限",
    topic: "大數據分析",
    accent: "中性"
  },
  {
    title: "開發者大會",
    participants: "25",
    topic: "網頁設計與應用",
    accent: "台式"
  },
  {
    title: "AI 科技論壇",
    participants: "100",
    topic: "機器學習與深度學習",
    accent: "多國混合"
  }
];

const userData = {
  name: "王好容",
  avatar: "https://via.placeholder.com/150", // 用戶頭像
  languageLevel: "B2 (Upper-Intermediate)",
  learningGoal: "提升英文口說能力",
  practiceList: [
    { id: 1, title: "點餐", progress: 70 },
    { id: 2, title: "旅行問路", progress: 40 },
    { id: 3, title: "職場會議", progress: 90 },
  ],
  recommendations: ["面試技巧", "文化差異討論", "電話溝通"],
};


const UserProfilePage = () => {

  return (
    <div className="min-h-scree">
      {/* Profile Header */}
      <div className="w-full mx-auto bg-white shadow-b-md p-6 py-88">
        <div className="grid grid-cols-5 items-center space-x-4">
          <div className="col-span-3">
            <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
            <p className="text-sm text-gray-600">
              語言能力：{userData.languageLevel}
            </p>
            <p className="text-sm text-gray-600">
              學習目標：{userData.learningGoal}
            </p>
          </div>

          {/* profile Picture */}
          <div className="col-span-2">
            <img
              src={userData.avatar}
              alt="User Avatar"
              className="w-48 h-48 rounded-full border-2 border-gray-300"
            />
          </div>
        </div>
      </div>

      {/* ChatRoomList */}
      <div className="p-6 bg-gray-200 py-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">我的聊天室</h3>
        <div className="flex gap-5">
          {ChatRoomData.map((data) => (
              <ChatRoomList title={data.title} participants={data.participants} topic={data.topic} accent={data.accent}/>
          ))}
        </div>
      </div>

      {/* Practice List */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          我的練習主題
        </h3>
        <ul className="space-y-4">
          {userData.practiceList.map((practice) => (
            <li
              key={practice.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
            >
              <span className="font-medium text-gray-700">
                {practice.title}
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-40 bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-4"
                    style={{ width: `${practice.progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {practice.progress}%
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Records */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">學習紀錄</h3>
        <p className="text-gray-600">本週練習時間：5 小時</p>
        <p className="text-gray-600">AI 評分平均：85/100</p>
      </div>

      {/* Recommendations */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">推薦主題</h3>
        <div className="flex flex-wrap gap-3">
          {userData.recommendations.map((item, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
