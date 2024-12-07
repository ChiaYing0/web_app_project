import React from "react";

const ChatInputButton = ({content}) => {
  return (
    <button
      onClick={() => handleButtonClick("Prompt")}
      className="p-2 bg-white rounded-lg hover:bg-gray-300"
      title="Prompt"
    >
    {content}
    </button>
  );
};

export default ChatInputButton;
