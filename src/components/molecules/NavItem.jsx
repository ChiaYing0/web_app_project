import React from 'react';
import Icon from '../atoms/Icon';

const NavItem = ({ icon, label, onClick }) => (
    <div className="flex items-center cursor-pointer hover:bg-[#F08D86] hover:text-gray-800 px-8 py-3 rounded-md" onClick={onClick}>
      {icon}
      <span className="ml-3 font-semibold">{label}</span>
    </div>
  );

export default NavItem;