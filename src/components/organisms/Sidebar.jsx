import React from "react";
import NavItem from "../molecules/NavItem";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { RiFeedbackLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white py-5 px-2 h-screen text-sm">
      <div className="py-6   border-b border-[#2D3A5D]">
        <div className=""></div>
      </div>
      <div className="flex flex-col space-y-3 mt-4">
        <NavItem
          icon={<RiChatVoiceAiFill />}
          label="FluentBuddy"
          onClick={handleOnClick}
        />
        <NavItem icon={<RiFeedbackLine />} label="Feedback" />
        <NavItem icon={<FaRegHeart />} label="Favorite" />
        <NavItem label="History" />
        <NavItem label="Settings" />
        <NavItem label="Log Out" />
      </div>
    </div>
  );
};
export default Sidebar;
