import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { Select } from "antd";
import { accent_options, scenario_options } from "../../models/chat";

const SelectionPage = () => {
  const [accent, setAccent] = useState("");
  const [scenario, setScenario] = useState("");

  const navigate = useNavigate();

  const handleOnClick = () => {
    if (accent === "" || scenario === "") {
      return alert("Please select the accent and scenario.");
    }
    navigate("/chatroom", { state: { accent, scenario } });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-800 text-white flex flex-col items-center justify-center">
        <RiChatVoiceAiFill className="text-[10vw] mb-4" />
        <p className="text-4xl font-semibold">FluentBuddy</p>
      </div>
      <div className="w-1/2 bg-gray-300 flex flex-col items-center justify-center">
        <Select
          className="w-96 h-12 mb-4"
          placeholder="Select a accent"
          onChange={setAccent}
          options={accent_options}
        />
        <Select
          className="w-96 h-12 mb-12"
          placeholder="Select a scenario"
          onChange={setScenario}
          options={scenario_options}
        />
        <button
          className="w-96 h-12 border border-gray-400 text-gray-400 rounded-md bg-gray-300 hover:text-gray-500 hover:bg-gray-200"
          onClick={handleOnClick}
        >
          Start the chat
        </button>
      </div>
    </div>
  );
};

export default SelectionPage;
