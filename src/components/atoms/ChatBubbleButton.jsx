import React from 'react'

const ChatBubbleButton = ({text, icon}) => {
  return (
    <button className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-gray-700 hover:bg-gray-100 text-xs flex items-center gap-2">
    {icon}
    {text}
    </button>

  )
}

export default ChatBubbleButton