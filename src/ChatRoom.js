import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, List, Avatar, Flex } from 'antd';
import { UserOutlined, RobotOutlined, ArrowLeftOutlined, AudioOutlined } from '@ant-design/icons';
import './ChatRoom.css';

function ChatRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const { accent, scenario } = location.state || { accent: "[TODO]", scenario: "[TODO]" };//帶入selection page資訊
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // 開始錄音
  const startRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/mp3" });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
        audioChunksRef.current = []; // 清空錄音資料
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "user", text: "語音訊息已錄製", audio: audioURL },
          { sender: "system", text: "[TODO]" },//從後端收到結果
        ]);
      };

      mediaRecorderRef.current.start();
    } catch (error) {
      console.error("無法錄音：", error);
      setIsRecording(false);
    }
  };

  // 停止錄音
  const stopRecording = () => {
    setIsRecording(false);
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };

  const handleBackToSettings = () => {
    navigate("/"); // 跳回到設定頁面
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
      <div className="back-button">
        <Button
          type="link"
          icon={<ArrowLeftOutlined />}
          onClick={handleBackToSettings}
          style={{ color: 'white', marginRight: '10px',  }}
        >
        </Button>
        </div>
        <h1>聊天 (語調: {accent} | 情境: {scenario})</h1>
      </div>

      <div className="chatroom-content">
        <List
          dataSource={messages}
          renderItem={(item) => (
            <List.Item className={`chat-item ${item.sender}`}>
            <List.Item.Meta
              avatar={
                item.sender === "user" ? (
                  <Avatar icon={<UserOutlined />} />
                ) : (
                  <Avatar icon={<RobotOutlined />} style={{ backgroundColor: '#87d068' }} />
                )
              }
              title={item.sender === "user" ? "你" : "系統"}
              description={
                item.audio ? (
                  <audio controls src={item.audio}></audio>
                ) : (
                  item.text
                )
              }
            />
          </List.Item>

          )}
        />
      </div>

      <div className="chatroom-footer">
        {isRecording ? (
          <Button type="danger" onClick={stopRecording}>
            停止錄音
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<AudioOutlined />}
            onClick={startRecording}
          >
            開始錄音
          </Button>
        )}
      </div>
    </div>
  );
}

export default ChatRoom;
