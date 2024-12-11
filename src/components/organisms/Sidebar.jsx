import React from 'react';
import NavItem from '../molecules/NavItem';
import { GrChatOption } from "react-icons/gr";
import { RiFeedbackLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

const Sidebar = () => (
    <div className="bg-gray-800 text-white py-5 px-2 h-screen text-xs">
      <div className='py-6   border-b border-[#2D3A5D]'>
        <div className=''>

        </div>
      </div>
      <div className="flex flex-col space-y-3 mt-4">
        <NavItem icon={<GrChatOption/>} label="Chat Generator" />
        <NavItem icon={<RiFeedbackLine/>}label="Feedback" />
        <NavItem label="Prompt Library" />
        <NavItem label="My Saves" />
        <NavItem icon={<FaRegHeart/>}label="Favorite" />
        <NavItem label="History" />
        <NavItem label="Statistics" />
        <NavItem label="Settings" />
        <NavItem label="Log Out" />
      </div>
    </div>
  );
export default Sidebar;